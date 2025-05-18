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

export const workoutPLANS = [
  {
    name: "Foundation Builder",
    type: "Beginner",
    image: "wp_beginner.jpg",
    duration: "4 Weeks",
    frequency: "3 Days/Week",
    goal: "Build basic strength, endurance & mobility"
  },
  {
    name: "Bodyweight Sculptor",
    type: "Intermediate",
    image: "wp_intermediate.jpg",
    duration: "6 Weeks",
    frequency: "4-5 Days/Week",
    goal: "Build muscle endurance & improve balance"
  },
  {
    name: "Beast Mode",
    type: "Advanced",
    image: "wp_advanced.jpg",
    duration: "8 Weeks",
    frequency: "6 Days/Week",
    goal: "Strength, hypertrophy & skill development"
  },
  {
    name: "Move Freely",
    type: "Mobility / Recovery Plan",
    image: "wp_mobility.jpg",
    duration: "Ongoing",
    frequency: "2 Days/Week (add to main plan)",
    goal: "Prevent injury & improve flexibility"
  },
]

export const popularExercises = [
  {
    name: "Push-ups",
    description: "Targets chest, triceps & core. Perfect for building upper body strength.",
    image: "pe_push_ups.jpg"
  },
  {
    name: "Pull-ups",
    description: "An advanced back & biceps killer. The king of pulling movements.",
    image: "pe_pull_ups.jpg"
  },
  {
    name: "Squats",
    description: "Build powerful legs & glutes. Master bodyweight before loading up.",
    image: "pe_squats.jpg"
  },
  {
    name: "Dips",
    description: "Mass builder for triceps & chest. A must for upper body development.",
    image: "pe_dips.jpg"
  }
]