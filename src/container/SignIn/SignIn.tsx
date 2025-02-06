import AuthLayout from "@/layouts/AuthLayout/AuthLayout";
import classes from "../PolicyReminderForm/PolicyReminderForm.module.css";
import Logo from "@/components/Logo/Logo";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

const SignIn = () => {
  return (
    <AuthLayout>
      <div className={classes.container}>
        <Logo />
        <h4>Welcome, valued customer</h4>
        <p>
          To make a claim, check the status of your policy, Purchase a new
          policy to make inquiries.
        </p>
        <Input label="Email" />
        <Input label="Password" type="password" />

        <Button>Sign In</Button>
      </div>
    </AuthLayout>
  );
};

export default SignIn;
