/* eslint-disable react/prop-types */
export default function Button({ variant, children, onClick, ...props }) {
  let variantClasses = "";
  switch (variant) {
    case "primary":
      variantClasses = "text-white btn-primary px-14";
      break;
    case "secondary":
      variantClasses = "border-[#ffab0b] border-2 text-[#ffab0b]";
      break;
    case "card":
      variantClasses = "bg-[#7c70b2] px-14 text-white py-2 text-base";
      break;

    default:
      variantClasses = "";
      break;
  }
  return (
    <button
      onClick={onClick}
      className={`py-3 px-6 rounded-xl text-xl ${variantClasses}`}
      {...props}
    >
      {children}
    </button>
  );
}
