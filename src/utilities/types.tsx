export type modalGenericType = {
  [key: string]: boolean;
};

export type requestType = {
  isLoading: boolean;
  data: any;
  error: any;
  id?: string;
};

export type insuranceTypes = {
  title: string;
  route: string;
  descriptions: string[] | null;
  list: null | string[];
  image: string;
};

export type navItemTypes = {
  title: string;
  route?: string;
  isActive?: boolean;
  description?: string;
  id: string;
  isBordered?: boolean;
};

export type tableOptionsType = {
  text: string;
  action: () => void;
};

export type policyType = {
  id: string;
  name: string;
  types: policySubtypeType[];
};

export type policySubtypeType = {
  id: string;
  plans: policySubTypePlansType[];
  name: string;
  features: string[];
  description: string;
  price: string;
};

export type policySubTypePlansType = {
  name: string;
  price: number;
  features: string[];
  description: string;
};

export type thirdPartyInsuranceFormTypes = {
  product: string;
  registrationNumber: string;
  chasisNumber: string;
  vehicleColor: string;
  roadWorthiness: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  state: string;
  startDate: string;
  endDate: string;
};

export type userType = {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  firstLogin: string;
  address: string;
  state: string;
};
