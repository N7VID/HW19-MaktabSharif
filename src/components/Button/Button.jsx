export default function Button({ variant, children, ...props }) {
  let variantClasses = "";
  switch (variant) {
    case "primary":
      variantClasses = "text-white btn-primary py-3 px-14";
      break;
    case "secondary":
      variantClasses = "border-[#ffab0b] border-2 text-[#ffab0b]";
      break;

    default:
      variantClasses = "";
      break;
  }
  return (
    <button
      className={`py-2 px-6 rounded-xl text-xl font-semibold ${variantClasses}`}
      {...props}
    >
      {children}
    </button>
  );
}
