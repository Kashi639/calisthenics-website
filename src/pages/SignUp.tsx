"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Button } from "../components/ui/button";
import { Input } from "@/components/ui/input";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Stages from "@/components/custom/Stages";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { url } from "inspector";
// import Button from "../components/ui/customButton";

// Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);

const step1Schema = z.object({
  email: z
    .string()
    .min(1, { message: "Email has to be filled." })
    .email("This is not a valid email."),
  password: z
    .string()
    .min(1, {
      message: "Password has to be filled.",
    })
    .regex(passwordValidation, {
      message:
        "Must be 8 or more characters and contain at least one uppercase letter, one lowercase letter, one number and one special character.",
    }),
});

const step2Schema = z.object({
  fullName: z.string().min(1, { message: "Full name has to be filled." }),
  // .optional(),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  gender: z.string({
    required_error: "Please select a gender.",
  }),
});

const step3Schema = z.object({
  fitnessLevel: z.string({
    required_error: "Please select fitness level.",
  }),
  primaryGoal: z.string({
    required_error: "Please select primary goal.",
  }),
  bodyWeight: z
    .string({
      required_error: "Please enter body weight.",
    })
    .min(1, { message: "Please enter body weight." }),
  height: z
    .string({
      required_error: "Please enter height.",
    })
    .min(1, { message: "Please enter height." }),
});

const fullSchema = step1Schema.merge(step2Schema).merge(step3Schema);

function SignUp() {
  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //     fullName: "",
  //     // dob: "",
  //   },
  // });

  const [step, setStep] = useState(1);
  const [stepsStatus, setStepsStatus] = useState([
    { active: true, completed: false }, // Step 1
    { active: false, completed: false }, // Step 2
    { active: false, completed: false }, // Step 3
  ]);

  const currentSchema =
    step === 1 ? step1Schema : step === 2 ? step2Schema : fullSchema;

  const form = useForm<z.infer<typeof fullSchema>>({
    resolver: zodResolver(currentSchema),
    mode: "onSubmit",
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
      dob: undefined,
      // gender: "",
      // fitnessLevel: "",
      // primaryGoal: "",
      bodyWeight: "",
      height: "",
    },
  });

  const updateStepStatus = (currentStep: number) => {
    setStepsStatus((prev) =>
      prev.map((_, index) => ({
        active: index === currentStep,
        completed: index < currentStep,
      }))
    );
  };

  const handleNext = async () => {
    const valid = await form.trigger();
    if (!valid) return;

    const nextStep = step + 1;
    setStep(nextStep);
    updateStepStatus(nextStep - 1);
  };

  const handleBack = () => {
    const prevStep = step - 1;
    setStep(prevStep);
    updateStepStatus(prevStep - 1);
  };

  function onSubmit(values: z.infer<typeof fullSchema>) {
    console.log(values);
    // const nextStep = step + 1;
    // setStep(nextStep);
    // updateStepStatus(nextStep - 1);
  }

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/sign-up-bg.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // filter: "brightness(0.2)",
      }}
      className=""
    >
      <div className="flex flex-col items-center justify-center min-h-svh">
      {/* bg-linear-to-b from-slate-100 to-slate-400 */}
        <Card className="w-xs sm:w-sm md:w-md"> 
          <CardHeader>
            <CardTitle className="text-lg">SIGN UP</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center gap-2 mb-2">
              {stepsStatus.map((status, index) => (
                <React.Fragment key={index}>
                  <Stages active={status.active} completed={status.completed}>
                    {index + 1}
                  </Stages>
                  {index < stepsStatus.length - 1 && (
                    <div className="w-25">
                      <Separator />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                {step === 1 && (
                  <>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Password"
                              type="password"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                          
                        </FormItem>
                      )}
                    />
                  </>
                )}

                {step === 2 && (
                  <>
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full name</FormLabel>
                          <FormControl>
                            <Input placeholder="Full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="dob"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Date of birth</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                captionLayout="dropdown-buttons"
                                fromYear={1950}
                                toYear={2025}
                                // defaultMonth={new Date(2024, 6)}
                                // startMonth={new Date(2024, 6)}
                                // endMonth={new Date(2025, 9)}
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date > new Date() ||
                                  date < new Date("1900-01-01")
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Gender</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl className="w-full">
                              <SelectTrigger>
                                <SelectValue placeholder="Select a gender" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}

                {step === 3 && (
                  <>
                    <FormField
                      control={form.control}
                      name="fitnessLevel"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Fitness Level</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl className="w-full">
                              <SelectTrigger>
                                <SelectValue placeholder="Select fitness level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="beginner">Beginner</SelectItem>
                              <SelectItem value="intermediate">
                                Intermediate
                              </SelectItem>
                              <SelectItem value="advanced">Advanced</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="primaryGoal"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Primary Goal</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl className="w-full">
                              <SelectTrigger>
                                <SelectValue placeholder="Select primary goal" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="strength">Strength</SelectItem>
                              <SelectItem value="weightLoss">
                                Weight Loss
                              </SelectItem>
                              <SelectItem value="endurance">
                                Endurance
                              </SelectItem>
                              <SelectItem value="mobility">Mobility</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="bodyWeight"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Body Weight (kgs)</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Body weight"
                              type="number"
                              pattern="[0-9]*"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="height"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Height (cms)</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Height"
                              type="number"
                              inputMode="numeric"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </>
                )}

                <div className="flex flex-col gap-3">
                  {step > 1 && (
                    <Button variant="custom" className="w-full cursor-pointer" onClick={handleBack}>
                      Back
                    </Button>
                  )}
                  {step < 3 ? (
                    <Button variant="custom" className="w-full cursor-pointer" onClick={handleNext}>
                      Next
                    </Button>
                  ) : (
                    <Button variant="custom" className="w-full cursor-pointer" type="submit">
                      Sign up
                    </Button>
                  )}
                </div>
              </form>
              <Separator className="mt-8 mb-8" />

              <div className="flex justify-center gap-4 mb-8">
                <Avatar>
                  <AvatarImage src="src\assets\img\google-circle.png" />
                  <AvatarFallback>G</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage
                    className=""
                    src="src\assets\img\facebook-circle.png"
                  />
                  <AvatarFallback>FB</AvatarFallback>
                </Avatar>
              </div>

              <div className="text-center">
                <p>
                  Already a user?{" "}
                  <Link to={"/signin"}>
                    <a>LOGIN</a>
                  </Link>
                </p>
              </div>
            </Form>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default SignUp;
