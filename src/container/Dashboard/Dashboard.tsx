import DashboardLayout from "@/layouts/DashboardLayout/DashboardLayout";
import classes from "./Dashboard.module.css";
import DashboardPoliciesReview from "../DashboardPoliciesReview/DashboardPoliciesReview";
import DashboardMain from "../DashboardMain/DashboardMain";

const Dashboard = () => {
  return (
    <DashboardLayout className={classes.container}>
      <DashboardPoliciesReview />
      <DashboardMain />
    </DashboardLayout>
  );
};

export default Dashboard;
