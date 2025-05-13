import { JSX } from 'react'
import { features } from "../constants";

type featureType = {
  icon: JSX.Element;
  text: string;
  description: string
}

function FeatureSection() {
  return (
    <div className='relative mt-20 border-b border-neutral-800 size-full'>
      <div className="text-center">
        <span className="bg-background text-primary rounded-full h-6 font-medium px-2 py-1 uppercase">
          feature
        </span>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide'>
          Why Choose{' '}
          <span className='bg-gradient-to-r from-primary to-gradient-primary text-transparent bg-clip-text'>Us?</span>
        </h2>
      </div>

      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature: featureType, index: number) => (
          <div key={index} className='w-full lg:w-1/2'>
            <div className='flex'> {/** justify-center */}
              <div className='flex mx-6 h-10 w-10 p-2 bg-background text-primary justify-center items-center rounded-full'>
                {feature.icon}
              </div>
              <div>
                <h5 className='mt-1 mb-6 text-xl'>{feature.text}</h5>
                <p className='text-md p-2 mb-10 lg:mb-20 text-foreground'>{ feature.description }</p>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeatureSection