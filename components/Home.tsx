"use client";
import React from "react";
import { signOut } from "next-auth/react";
import useCurrentUser from "@/hooks/useCurrentUser";

const Home = () => {
  const { data: user } = useCurrentUser();

  return (
    <div>
      <h2 className="text-4xl text-green-500">MovieStream</h2>
      <p className="text-white">Logged in as : {user?.email}</p>
      <button className="h-10 m-10 bg-white" onClick={() => signOut()}>
        LogOut
      </button>
    </div>
  );
};

export default Home;
