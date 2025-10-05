import { useState } from "react";
export default function New() {
  const [data, setData] = useState("")
  function handkeClick(){
  const  newdata=data.toUpperCase()
  setData(newdata)


  }
  return (
    <div className="flex justify-center items-center gap-2">
      <input
        className="border border-gray-700 px-4 py-2 w-[300px]"
        type="text"
        value={data}
        onChange={(e) => {
          setData(e.target.value);
        }}
        placeholder="Please type here"
        id="text"
      />
      <button onClick={handkeClick} className="px-4 py-2 bg-gray-800 text-white font-semibold hover:bg-black actice:scale-90 duration-300">
        To Upper Case
      </button>
    </div>
  );
}
