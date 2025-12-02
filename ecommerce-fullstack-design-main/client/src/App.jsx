import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Toaster } from "react-hot-toast";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" || location.pathname == "/signup";

  return (
    <div>
      {!hideLayout && <Header />}
      <Toaster position="top-right" reverseOrder={false} />

      <main>
        <Outlet />
      </main>
      {!hideLayout && <Footer />}
    </div>
  );
};

export default App;
