import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Abdulateef Jimson. Have a project in mind or want to work together? Send a message!",
};

export default function Contact() {
  return <ContactClient />;
}