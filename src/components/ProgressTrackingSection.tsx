import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRightLeft, Award, Calendar, ChartColumn, TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const chartData = [
  { week: "Week 1", reps: 10, mobile: 80 },
  { week: "Week 2", reps: 15, mobile: 200 },
  { week: "Week 3", reps: 15, mobile: 120 },
  { week: "Week 4", reps: 20, mobile: 190 },
];
const chartConfig = {
  reps: {
    label: "Reps",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

function WorkoutPlanSection() {
  return (
    <div className="relative mt-20 border-b border-neutral-800 size-full">
      <div className="text-center">
        <h2 className="text-2xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          See your{" "}
          <span className="bg-gradient-to-r from-primary to-gradient-primary text-transparent bg-clip-text">
            Progress
          </span>
        </h2>
      </div>

      <div className="mt-10 lg:mt-20">
        <div className="flex  items-center justify-center">
          {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} workoutPlans={workoutPLANS} /> */}
          <Card className="w-auto">
            <CardHeader>
              <CardTitle>Progress Chart: Push-ups</CardTitle>
              {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="md:min-h-1/4 lg:min-h-[400px] w-full">
                <LineChart
                  accessibilityLayer
                  data={chartData}
                  margin={{
                    left: 12,
                    right: 12,
                  }}
                >
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="week"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    // tickFormatter={(value) => value}
                    // tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Line
                    dataKey="reps"
                    type="natural"
                    stroke="var(--color-reps)"
                    strokeWidth={2}
                    dot={{
                      fill: "var(--color-reps)",
                    }}
                    activeDot={{
                      r: 6,
                    }}
                  />
                </LineChart>
              </ChartContainer>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                <div className="flex items-center gap-2">
                  <Calendar color="var(--primary)"/>
                  <h1 className="text-lg lg:text-2xl">Workout Calender</h1>
                </div>
                <div className="flex items-center gap-2">
                  <ChartColumn color="var(--primary)" />
                  <h1 className="text-lg lg:text-2xl">Real-time Stats</h1>
                </div>
                <div className="flex items-center gap-2">
                  <Award color="var(--primary)" />
                  <h1 className="text-lg lg:text-2xl">Milestone Badges</h1>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowRightLeft color="var(--primary)" />
                  <h1 className="text-lg lg:text-2xl">Before & After Tracking</h1>
                </div>
              </div>

              <p className="text-center text-lg lg:text-2xl mt-5">Create a free account to unlock personalized progress tracking.</p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link to={"/progresstracking"}>
                <Button className="cursor-pointer">Start Tracking Now</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default WorkoutPlanSection;
