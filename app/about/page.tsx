import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Abdulateef Jimson, a passionate software developer specializing in web development, React, Next.js, and blockchain applications.",
};

export default function About() {
  return <AboutClient />;
}