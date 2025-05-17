import React from 'react'

function PopularExercisesSection() {
  return (
        <div className='relative mt-20 border-b border-neutral-800 size-full'>
      <div className="text-center">
        <h2 className="text-2xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Popular{' '}
          <span className="bg-gradient-to-r from-primary to-gradient-primary text-transparent bg-clip-text">
          Exercises
          </span>
        </h2>
      </div>

      <div className="mt-10 lg:mt-20">
        <div className="flex  items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

            <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transistion-shadow">
              <div className="h-96 w-72">
                <img className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' src="src\assets\img\pe_push_ups.jpg" alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[50%] group-hover:translate-y-0 transition-all">
              <h1 className='text-3xl font-bold text-white'>Push-ups</h1>
              <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>argets chest, triceps & core. Perfect for building upper body strength.</p>
            </div>
          </div>
          
          <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transistion-shadow">
              <div className="h-96 w-72">
                <img className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' src="src\assets\img\pe_pull_ups.jpg" alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[50%] group-hover:translate-y-0 transition-all">
              <h1 className='text-3xl font-bold text-white'>Pull-ups</h1>
              <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>An advanced back & biceps killer. The king of pulling movements.</p>
            </div>
            </div>

            <div className="group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transistion-shadow">
              <div className="h-96 w-72">
                <img className='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500' src="src\assets\img\pe_squats.jpg" alt="" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[50%] group-hover:translate-y-0 transition-all">
              <h1 className='text-3xl font-bold text-white'>Squats</h1>
              <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>Build powerful legs & glutes. Master bodyweight before loading up.</p>
            </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularExercisesSection