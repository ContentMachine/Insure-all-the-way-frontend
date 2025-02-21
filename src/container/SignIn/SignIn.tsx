import AuthLayout from "@/layouts/AuthLayout/AuthLayout";
import classes from "../PolicyReminderForm/PolicyReminderForm.module.css";
import Logo from "@/components/Logo/Logo";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import { useRouter } from "next/navigation";
import { routes } from "@/utilities/routes";
import { useContext, useState } from "react";
import { inputChangeHandler } from "@/helpers/inputChangeHandler";
import { areAllValuesFilled } from "@/helpers/validateObjectValues";
import { requestHandler } from "@/helpers/requestHandler";
import { requestType } from "@/utilities/types";
import useError from "@/hooks/useError";
import { LOCAL_STORAGE_AUTH_KEY } from "@/utilities/constants";
import { useToast } from "@/context/ToastContext";
import { AuthContext } from "@/context/AuthContext";

const SignIn = () => {
  // Router
  const router = useRouter();

  // State
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [requestState, setRequestState] = useState<requestType>({
    isLoading: false,
    data: null,
    error: null,
  });
  const [screen, setScreen] = useState("login");

  // Context
  const { setUser } = useContext(AuthContext);

  // Hooks
  const { errorFlowFunction } = useError();
  const { showToast } = useToast();

  // Requests
  const login = () => {
    requestHandler({
      url: "/auth/sign-in",
      method: "POST",
      data: { email: loginData?.email, password: loginData?.password },
      state: requestState,
      setState: setRequestState,
      id: "sign-in",
      requestCleanup: true,
      successFunction(res) {
        if (localStorage) {
          localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, res?.data?.token);
        }
        setUser(res?.data?.user);
        router.push(routes.DASHBOARD);
      },
      errorFunction(err) {
        if (err?.status === 403) {
          showToast((err?.response?.data as any)?.message, "success");
          setScreen("resetPassword");
          setLoginData((prevState) => {
            return { ...prevState, password: "", confirmPassword: "" };
          });
        } else {
          errorFlowFunction(err);
        }
      },
    });
  };

  const resetPassword = () => {
    requestHandler({
      url: "/auth/reset-password",
      method: "POST",
      data: { email: loginData?.email, newPassword: loginData?.password },
      state: requestState,
      setState: setRequestState,
      id: "reset-password",
      requestCleanup: true,
      successFunction(res) {
        showToast(res?.data?.message, "success");
        setLoginData((prevState) => {
          return { ...prevState, password: "", confirmPassword: "" };
        });
        setScreen("login");
      },
      errorFunction(err) {
        console.log(err);
        errorFlowFunction(err);

        if (err?.status === 403) {
          setScreen("resetPassword");
          setLoginData((prevState) => {
            return { ...prevState, password: "" };
          });
        }
      },
    });
  };

  const loginContainer = (
    <div className={classes.container}>
      <Logo />
      <h4>Welcome, valued customer</h4>
      <p>
        To make a claim, check the status of your policy, Purchase a new policy
        to make inquiries.
      </p>
      <Input
        label="Email"
        isRequired
        name="email"
        value={loginData?.email}
        onChange={(e) => inputChangeHandler(e, setLoginData)}
      />
      <Input
        label="Password"
        type="password"
        isRequired
        name="password"
        value={loginData?.password}
        onChange={(e) => inputChangeHandler(e, setLoginData)}
        tip="Your password should be at least 8 characters"
      />

      <Button
        loading={requestState?.isLoading}
        onClick={(e) => {
          e.preventDefault();
          login();
        }}
        disabled={!loginData?.email || !loginData?.password}
      >
        Sign In
      </Button>
    </div>
  );

  const resetPasswordContainer = (
    <div className={classes.container}>
      <Logo />
      <h4>Reset your Password</h4>
      <p>
        To start interacting with your policies, please reset your password to a
        custom one
      </p>

      <Input
        label="Email"
        isRequired
        name="email"
        value={loginData?.email}
        onChange={(e) => inputChangeHandler(e, setLoginData)}
      />

      <Input
        label="New Password"
        type="password"
        isRequired
        name="password"
        value={loginData?.password}
        onChange={(e) => inputChangeHandler(e, setLoginData)}
      />

      <Input
        label="Confirm Password"
        type="password"
        isRequired
        name="confirmPassword"
        value={loginData?.confirmPassword}
        onChange={(e) => inputChangeHandler(e, setLoginData)}
        tip="Your password should be at least 8 characters"
      />

      <Button
        loading={requestState?.isLoading}
        onClick={(e) => {
          e.preventDefault();
          resetPassword();
        }}
        disabled={
          !loginData?.email ||
          loginData?.password !== loginData?.confirmPassword
        }
      >
        Reset Password
      </Button>
    </div>
  );

  return (
    <AuthLayout>
      {screen === "resetPassword" ? resetPasswordContainer : loginContainer}
    </AuthLayout>
  );
};

export default SignIn;
