import FeatureSection from '@/components/FeatureSection'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import WorkoutPlanSection from '@/components/WorkoutPlanSection'
import PopularExercisesSection from '@/components/PopularExercisesSection'
import { useEffect, useRef, useState } from 'react'

function Dashboard() {

  const [height, setHeight] = useState(0)
  const ref = useRef(null); //<HTMLInputElement | null>

  useEffect(() => {
    setHeight(ref?.current?.clientHeight)
  }, []);

  return (
    <>
    {/* <div className='flex justify-end'>
      <Link to={"/signin"}>
      <Button>Sign In</Button>
      </Link>
      <Link to={"/signup"}>
      <Button>Sign Up</Button>
      </Link>
      <ModeToggle />
    </div> */}
      <div ref={ref}>
      <Navbar  />
      </div>
      <div style={{height: `calc(100dvh - ${height}px)`}} className="">
        <HeroSection />
      </div>
      <div style={{ height: `calc(100dvh - ${height}px)` }} className="">
        <FeatureSection />
      </div>
      <div style={{ height: `calc(100dvh - ${height}px)` }} className="">
        <PopularExercisesSection />
      </div>
      <div style={{ height: `calc(100dvh - ${height}px)` }} className="">
        <WorkoutPlanSection />
      </div>
    </>
  )
}

export default Dashboard