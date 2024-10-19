export const formatVND = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " VND";
};
