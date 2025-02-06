import Link from "next/link";
import classes from "./Footer.module.css";
import { routes } from "@/utilities/routes";

const Footer = () => {
  return (
    <footer className={classes.container}>
      <p>© 2025 Insure All The Way. - All Rights Reserved</p>
      <Link href={routes.PRIVACY_POLICY}>Privacy Policy</Link>
      <Link href={routes.TERMS_AND_CONDITIONS}>Terms and Conditions</Link>
    </footer>
  );
};

export default Footer;
