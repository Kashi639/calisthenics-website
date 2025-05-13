import { ChartNoAxesColumnIncreasing, Dumbbell, Library, Users } from "lucide-react"

export const navItems = [
  {label: "Home", href: "/home"},
  {label: "Exercises", href: "/exercises"},
  {label: "Workouts", href: "/workouts"},
  {label: "Progress Tracker", href: "/progresstracker"},
  {label: "Community", href: "/community"},
]


export const features = [
  {
    icon: <Dumbbell />,
    text: "Workout Routines",
    description: "Structured programs for all levels. From beginners to profesionals."
  },
  {
    icon: <Library />,
    text: "Exercise Library ",
    description: "Learn form & techniques with our large library of exercises."
  },
  {
    icon: <ChartNoAxesColumnIncreasing />,
    text: "Progress Tracker",
    description: "Log workouts, track strength gains. Improve along the way"
  },
  {
    icon: <Users />,
    text: "Community Support",
    description: "Connect with fellow athletes to communicate and learn more about calisthenics."
  },
]