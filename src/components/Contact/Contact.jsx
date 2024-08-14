export default function Contact({ title, value }) {
  return (
    <div className="bg-white py-1 px-4 rounded-md w-96 flex justify-between items-center border border-black">
      <span>{title}</span> <span>{value}</span>
    </div>
  );
}
