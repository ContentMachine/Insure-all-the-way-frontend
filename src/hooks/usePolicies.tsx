import useGetHook from "./useGetHook";

export const usePolicyType = (type: string) => {
  const url = type ? `/policies/policy/${type}` : null;

  return useGetHook(url);
};

export const usePolicyTypeBySubtype = (type: string, subType: string) => {
  const url = type && subType ? `/policies/policy/${type}/${subType}` : null;

  return useGetHook(url);
};

export const useUserPolicy = () => {
  const url = `/policies/user/policy`;

  return useGetHook(url);
};

export const useUserPolicyById = (id: string) => {
  const url = `/policies/user/policy/${id}`;

  return useGetHook(url);
};

export const useUserPoliciesStats = () => {
  const url = `/policies/user/summary`;

  return useGetHook(url);
};
