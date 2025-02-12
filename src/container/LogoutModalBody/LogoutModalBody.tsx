import Button from "@/components/Button/Button";
import classes from "./LogoutModalBody.module.css";

const LogoutModalBody = () => {
  return (
    <div className={classes.container}>
      <h3>Are you sure you want to logout?</h3>
      <p>Best believe we will keep your dashboard just the way you left it!</p>

      <div className={classes.buttonSection}>
        <Button type="invalid">Cancel</Button>
        <Button type="delete">Logout</Button>
      </div>
    </div>
  );
};

export default LogoutModalBody;
