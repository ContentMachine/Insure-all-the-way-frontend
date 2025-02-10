import Dropdown from "@/components/Dropdown/Dropdown";
import classes from "./EnhancedThirdPartyMotorInsuranceForm.module.css";
import Input from "@/components/Input/Input";
import { carColors, vehicleTypes } from "@/utilities/motorInsuranceData";

const EnhancedThordPartyMortrInsuranceForm1 = () => {
  return (
    <form>
      <Dropdown label="Make of Vehicle" options={[]} isRequired />
      <Dropdown label="Year of make" options={[]} isRequired />
      <Dropdown label="Model of Vehicle" options={[]} isRequired />
      <Input label="Start Date" isRequired type="date" />
      <Input label="End Date" isRequired type="date" />
      <Input label="Registration Number" type="number" isRequired />
      <Input label="Engine Number" type="number" isRequired />
      <Input label="Chasis Number" type="number" isRequired />
      <Dropdown label="Car Color" options={carColors} isRequired />
      <Dropdown label="Vehicle Type" options={vehicleTypes} isRequired />
    </form>
  );
};

export default EnhancedThordPartyMortrInsuranceForm1;
