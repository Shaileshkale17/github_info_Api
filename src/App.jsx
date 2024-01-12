import { useState } from "react";
import Logo from "./components/Logo/Logo";
import { Outlet, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-0d1117 m-0 p-0">
        <div className="container text-gray-200 py-3">
          <Logo />
          <Outlet/>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
