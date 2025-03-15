"use client";
import React from "react";
import { signOut } from "next-auth/react";

const Home = () => {
  return (
    <div>
      <h2 className="text-4xl text-green-500">MovieStream</h2>
      <button className="h-10 m-10 bg-white" onClick={() => signOut()}>
        LogOut
      </button>
    </div>
  );
};

export default Home;
