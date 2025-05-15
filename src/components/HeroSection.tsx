import herobg from "../assets/vid/herobg.mp4";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className="size-full relative">
      <video
        autoPlay
        loop
        muted
        className="size-full object-cover z-10 lg:object-fill"
      >
        <source src={herobg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="size-full bg-linear-to-b from-black/70 to-black/70 absolute top-0 left-0 z-20">
        <div className="flex flex-col items-center max-w-7xl mx-auto mt-20 lg:mt-30">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide text-white">
            Master Your Body.{" "}
            <span className="bg-gradient-to-r from-primary to-gradient-primary text-transparent bg-clip-text">
              Build Strength Anywhere.
            </span>
          </h1>
          <div className="flex flex-wrap sm:flex-nowrap justify-center my-10 gap-10">
            <Link to={"/signup"}>
              <Button className="cursor-pointer" variant="default" size="lg">
                Get Started
              </Button>
            </Link>
            <Button className="cursor-pointer" variant="default" size="lg">
              Browse Exercises
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
