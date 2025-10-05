import Heading from "../components/Heading";

import { useState } from "react";

export default function About() {
  // const [fullname, setFullname] = useState("john doe");

  const [show, setShow] = useState(false);

  return (
    <div className="flex item-center justify-center flex-col gap-5 my-10">
      <button
        className={`px-4 py-2 ${
          show ? "bg-green-300" : "bg-red-300"
        } text-2xl w-fit mx-auto`}
        // onClick={() => setFullname("Lorem Ipsum")}
        onClick={() => setShow(!show)}
      >
        {show ? "Hide" : "Show"}
      </button>

      {show && <Heading text="fullname" color="bg-purple-300" />}

      {/* <Heading text={fullname} color="bg-purple-300" /> */}
    </div>
  );
}
