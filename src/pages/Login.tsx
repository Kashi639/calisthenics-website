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
import { useState } from "react";
import { Link } from "react-router-dom";
// import Button from "../components/ui/customButton";

// Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);

const formSchema = z.object({
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
function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/sign-in-bg.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // filter: "brightness(0.2)",
      }}

      // className="bg-linear-to-b from-black/70 to-black/70 bg-[url(/sign-in-bg.jpg)] bg-center bg-cover bg-no-repeat"
    >
      <div className="flex flex-col items-center justify-center min-h-svh">
        {/* bg-linear-to-b from-slate-100 to-slate-400 */}
        <Card className="w-xs sm:w-sm md:w-md">
          <CardHeader>
            <CardTitle className="text-lg">LOGIN</CardTitle>
            <CardDescription>
              Please enter your details to sign in
            </CardDescription>
            {/* <Button /> */}
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                      {/* <FormDescription>
                        This is your public display name.
                      </FormDescription> */}
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
                      {/* <FormDescription>
                        This is your public display name.
                      </FormDescription> */}
                      <FormMessage />
                      {/* Remember me checkbox */}
                      <div className="flex items-center space-x-2">
                        <Checkbox id="remember" />
                        <label
                          htmlFor="remember"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Remember me?
                        </label>
                      </div>
                    </FormItem>
                  )}
                />
                <div className="flex flex-col">
                  <Button
                    variant="custom"
                    className="w-full cursor-pointer"
                    type="submit"
                  >
                    Sing In
                  </Button>
                  <a href="" className="self-end">
                    Forgot password?
                  </a>
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
                  Need an account?{" "}
                  <Link to={"/signup"}>
                    <a>SIGN UP</a>
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

export default Login;
