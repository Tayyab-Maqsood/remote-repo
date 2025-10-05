import Navbar from "./components/Navbar";
// import Heading from "./components/Heading";
// import Greeting from "./components/Greeting";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Todos from "./pages/Todos";
import Contact from "./pages/Contact";
import New from "./pages/New";
// components
// props

export default function App() {
  return (
    <div>
      {/* <New /> */}
      <Todos />
      {/* <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter> */}

      {/* <Navbar />

      <Heading text="Examples in Each Chapter" color="bg-purple-300" />
      <Heading text="Use the Menu" color="bg-blue-300" />
      <Heading text="Why Study JavaScript?" color="bg-green-300" />
      <Heading />

      <Greeting fullname="Umar" />
      <Greeting />
      <Greeting fullname="Ahmad" /> */}
    </div>
  );
}
