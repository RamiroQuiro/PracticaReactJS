import React from "react";
import {Outlet} from 'react-router-dom'
import Footer from "../componentes/Footer";
import Menu from "../componentes/Menu";

export default function Layout() {
  return (
    <div className="">
      <header>
        <Menu/>
      </header>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
}
