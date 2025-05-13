import React from 'react'
import EmblaCarousel from './EmblaCarousel/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import '../css/embla.css';

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function WorkoutPlanSection() {
  return (
    <div className='relative mt-20 border-b border-neutral-800 size-full'>
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Workout{' '}
          <span className="bg-gradient-to-r from-primary to-gradient-primary text-transparent bg-clip-text">
          Plans
          </span>
        </h2>
      </div>

      <div className="mt-10 lg:mt-20">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  )
}

export default WorkoutPlanSection