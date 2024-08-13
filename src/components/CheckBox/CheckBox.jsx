export default function CheckBox({ onChange, checked, value, ...props }) {
  return (
    <div className="flex items-center gap-[6px]">
      <label htmlFor={value}>{value}</label>
      <input
        type="checkbox"
        id={value}
        className="accent-[#7c70b2]"
        value={value}
        onChange={onChange}
        checked={checked}
        {...props}
      />
    </div>
  );
}
