import { Facebook, Instagram, Twitter } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
     <div className="relative mt-16 bg-[var(--primary)]">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-[var(--primary)]"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <Link to={"/"} >
            <a
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <img className="h-10 w-10" src={logo} alt="logo" />
              <span className="ml-2 text-xl font-bold tracking-wide uppercase">
                CalisthenicsX
              </span>
              </a>
              </Link>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-deep-purple-50">
                Master your body. Own your strength.
              </p>
              <p className="mt-4 text-sm text-deep-purple-50">
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Quick Links
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link to={"/home"} >
                    <a
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    🏠 Home
                  </a>
                  </Link>
                  
                </li>
                <li>
                  <Link to={"/exercises"} >
                  <a
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    💪 Exercises
                    </a>
                    </Link>
                </li>
                <li>
                  <Link to={"/workouts"} >
                  <a
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    🗓️ Workouts
                    </a>
                    </Link>
                </li>
                <li>
                  <Link to={"/progresstracker"} >
                  <a
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    📊 Progress Tracker
                    </a>
                    </Link>
                </li>
                <li>
                  <Link to={"/community"} >
                  <a
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    💬 Community
                    </a>
                    </Link>
                </li>
                <li>
                  <Link to={"/contact"} >
                  <a
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    📞 Contact
                    </a>
                    </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Legal
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    📄 Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    🔒 Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    🚨 Disclaimer (for fitness/medical advice)
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Contact
              </p>
              <ul className="mt-2 space-y-2">
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Email: info@calisthenicsx.com
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Phone: +91-9876543210
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400"
                  >
                    Support: Live Chat / FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-[var(--background)] sm:flex-row">
          <p className="text-sm ">
            © Copyright 2025 CalisthenicsX. All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <Instagram />
            </a>
            <a
              href="/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
             <Twitter />
            </a>
            <a
              href="/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <Facebook />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer