import React from "react";
import {Outlet} from 'react-router-dom'
import Menu from "../componentes/Menu";

export default function Layout() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header>
        <Menu/>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  );
}
