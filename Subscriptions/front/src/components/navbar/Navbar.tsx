/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div id="navbarContainer" className="h-16 bg-cyan-400 flex items-center">
      <div>
        <img src="" alt="Logo" />
      </div>
      <div className="ml-auto p-6">
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
