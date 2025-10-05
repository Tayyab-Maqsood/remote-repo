export default function Heading({ text = "Invalid", color = "bg-gray-300" }) {
  return (
    <div className={`text-4xl text-center ${color} my-5 py-5 font-semibold`}>
      {text}
    </div>
  );
}
