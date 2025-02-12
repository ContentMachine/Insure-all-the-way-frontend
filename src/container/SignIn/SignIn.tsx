import AuthLayout from "@/layouts/AuthLayout/AuthLayout";
import classes from "../PolicyReminderForm/PolicyReminderForm.module.css";
import Logo from "@/components/Logo/Logo";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import { routes } from "@/utilities/routes";

const SignIn = () => {
  // Router
  const router = useRouter();

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

        <Button
          onClick={(e) => {
            e.preventDefault();
            router.push(routes.DASHBOARD);
          }}
        >
          Sign In
        </Button>
      </div>
    </AuthLayout>
  );
};

export default SignIn;
