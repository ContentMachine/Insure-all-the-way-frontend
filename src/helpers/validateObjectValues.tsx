export const areAllValuesFilled = (obj: any) => {
  return Object.values(obj).every(
    (value) => value !== null && value !== undefined && value !== ""
  );
};
