import FeatureSection from '@/components/FeatureSection'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import PopularExercisesSection from '@/components/PopularExercisesSection'
import WorkoutPlanSection from '@/components/WorkoutPlanSection'
import ProgressTrackingSection from '@/components/ProgressTrackingSection'
import useScreenWidth from '@/hooks/useScreenWidth'
import { useEffect, useRef, useState } from 'react'

function Dashboard() {

  const [height, setHeight] = useState(0)
  const screenWidth = useScreenWidth();
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
      <div style={{ height: screenWidth < 1042 ? 'auto' : `calc(100dvh - ${height}px)` }} className="">
        <PopularExercisesSection />
      </div>
      <div style={{ height: `calc(100dvh - ${height}px)` }} className="">
        <WorkoutPlanSection />
      </div>
      <div style={{ height: screenWidth >= 1024 && screenWidth <= 1280 ? 'auto' : `calc(100dvh - ${height}px)` }} className="">
        <ProgressTrackingSection />
      </div>
    </>
  )
}

export default Dashboard