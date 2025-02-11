import ApppLayout from "@/layouts/ApppLayout/ApppLayout";
import classes from "./ContactUs.module.css";
import ContactUsForm from "../ContactUsForm/ContactUsForm";
import ContactUsImages from "../ContactUsImages/ContactUsImages";

const ContactUs = () => {
  return (
    <ApppLayout>
      <section className={classes.container}>
        <ContactUsImages />
        <ContactUsForm />
      </section>
    </ApppLayout>
  );
};

export default ContactUs;
