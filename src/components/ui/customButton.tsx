import React, { useEffect, useRef, useState } from "react";
// import { type Color } from '../../../lib/types' //import types from other files

// interface IButtonProps { //only describes objects

// }

// type ButtonProps = {
//   // type: "submit" | "reset" | "button";
//   // autoFocus?: boolean;

//   // style: {
//   //   backgroundColor: string;
//   //   textColor: string;
//   //   fontSize: any;
//   // };

//   // style: React.CSSProperties;

//   // borderRadius: Record<string, number>

//   // onClick: (test: string) => number; //types of functions

//   // children: React.ReactNode //for children, ReactNode for text and jsx elements

//   // setCount: React.Dispatch<React.SetStateAction<number>>; // type for a setter function
// };

// type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
//   variant?: "primary" | "secondary";
// }; // to accept all props for that element

// type ButtonProps = {
//   type: "button" | "submit" | "reset";
//   color: "red" | "blue" | "green"
// }

// type SuperButtonProps = ButtonProps & {
//   size: "md" | "lg";
// } // to have types of ButtonProps as well as new type

// type User = {
//   name: string;
//   age: number;
// }

// const buttonTextOptions = [
//   "c",
//   "clclcl",
//   "ckkckc",
// ] as const; // should be used for constants

// type User = {
//   sessionId: string;
//   name: string;
// }

// type Guest = Omit<User, "name">; // Take user type and omit name from it

// type ButtonColor = "red" | "blue"|"green";

// const convertToArray = <T,>(value: T): T[] => { //do not use any, use generics
//   return [value];
// }

// function convertToArray<T>(value: T): T[]{ //to accept any type we use generics
//   return [value];
// }

// convertToArray(5);
// convertToArray("Hello");

// type ButtonProps<T> = { //instead of number we use a generic T so that it can take string as well, countValue should be of same type as countHistory
//   countValue: T;
//   countHistory: T[];
// }

type ButtonProps = {
  style: React.CSSProperties;
}


function Button() {
  // const handleclick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => console.log("clicked"); //event handlers type
  // const [count, setCount] = useState(0);
  // const [text, setText] = useState("click me!"); //typescript infers the type
  // const [user, setUser] = useState<User | null>(null); // for objects we have to infer it to a type | null

  // const ref = useRef<HTMLButtonElement>(null); // for refs we have to infer a type

  // useEffect(() => { //no need to add type
  //   // const previousButtonColor = localStorage.getItem("buttonColor") as ButtonColor; // as keyword asert types to it.
  // },[])

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     .then((response) => response.json())
  //     .then((data: unknown) => { //install ts-reset library to auto apply type unknown to fetched data
  //       // run it through zod, zod is a schema validator
  //       // cont todo = todoSchema.parse(data); //tells you whether that data is that particular shape

  //       // do something with data
  //     });
  // }, []);

  return <button >click me!</button>;
}

export default Button;
