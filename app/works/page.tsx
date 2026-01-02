import { Metadata } from "next";
import WorksClient from "./WorksClient";

export const metadata: Metadata = {
  title: "Works",
  description:
    "A showcase of web development projects by Abdulateef Jimson, including blockchain applications, e-commerce platforms, and more.",
};

export default function Works() {
  return <WorksClient />;
}