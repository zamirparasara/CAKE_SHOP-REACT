const FormatPrice = ({ Pprice }) => {
  return Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(Pprice / 100);
};

export default FormatPrice;
