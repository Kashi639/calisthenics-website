import React, { useCallback, useEffect, useRef } from 'react'
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom";

const TWEEN_FACTOR_BASE = 0.2

type PropType = {
  slides: number[]
  options?: EmblaOptionsType
  workoutPlans: { name: string; type: string; image: string; duration: string; frequency: string; goal: string; }[]
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, workoutPlans } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const tweenFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__parallax__layer') as HTMLElement
    })
  }, [])

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenParallax = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }

          const translate = diffToTarget * (-1 * tweenFactor.current) * 100
          const tweenNode = tweenNodes.current[slideIndex]
          tweenNode.style.transform = `translateX(${translate}%)`
        })
      })
    },
    []
  )

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenParallax(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenParallax)
      .on('scroll', tweenParallax)
      .on('slideFocus', tweenParallax)
  }, [emblaApi, tweenParallax])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <Link to={"/"}>
              <div className="embla__parallax">
                <div className="embla__parallax__layer">
                  <div className="relative embla__slide__img embla__parallax__img">
                  <img
                    className="embla__slide__img embla__parallax__img opacity-80"
                      // src={`https://picsum.photos/600/350?v=${index}`}
                        src={`src/assets/img/${workoutPlans[index].image}`}
                    alt="Your alt text"
                    />
                    <div className='absolute top-5 bottom-5 left-20 right-20 lg:bottom-10 lg:left-40 lg:right-40 lg:top-10'>
                        <h1 className='text-2xl lg:text-4xl mb-10'>{workoutPlans[index].name}</h1>
                      <Badge className='mb-5'>{workoutPlans[index].type}</Badge>
                      <p className='text-sm lg:text-md font-bold'>Duration : <span className='font-normal'>{workoutPlans[index].duration}</span></p>
                      <p className='text-sm lg:text-md font-bold'>Frequency : <span className='font-normal'>{workoutPlans[index].frequency}</span></p>
                      <p className='text-sm lg:text-md font-bold'>Goal : <span className='font-normal'>{workoutPlans[index].goal}</span></p>
                    </div>
                  </div>
                  {/* <img
                    className="embla__slide__img embla__parallax__img"
                    src={`https://picsum.photos/600/350?v=${index}`}
                    alt="Your alt text"
                  /> */}
                </div>
              </div>
              </Link>
              </div> 
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
