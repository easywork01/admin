import React from "react";
import Header from "./components/Header";
import Body2 from "./components/Body2";
import Body3 from "./components/Body3";
import ForgotPassword from "./components/ForgotPassword";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import Header2 from "./components/Header2";
import QaPage from "./components/QaPage";
//AppLayout
function App() {
  return (
    <>
      <Header2 />
      {/* <Body3 /> */}
      <QaPage />
      {/* <ForgotPassword /> */}
      {/* <Outlet />
      <Footer /> */}
    </>
  );
}

export default App;
