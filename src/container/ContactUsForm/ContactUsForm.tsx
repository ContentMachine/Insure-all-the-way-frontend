import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import TextArea from "@/components/Textarea/TextArea";
import React from "react";
import classes from "./ContactUsForm.module.css";

const ContactUsForm = () => {
  return (
    <form className={classes.container}>
      <h1>Get In Touch</h1>
      <p>
        We are happy to respond to your feedback and inquiries about our
        products and services.
      </p>

      <Input label="First Name" placeholder="John" />
      <Input label="Last Name" placeholder="John" />
      <Input label="Email" placeholder="abc@example.com" type="email" />
      <Input label="Phone Number" placeholder="+123 45 678 90" type="phone" />
      <TextArea label="Email" placeholder="Your message" />
      <Button>Submit</Button>
    </form>
  );
};

export default ContactUsForm;
