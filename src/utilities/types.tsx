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
