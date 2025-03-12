"use client";
/* eslint-disable @next/next/no-img-element */
import Input from "@/components/Input";
import React, { useCallback, useState } from "react";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "signup" : "login"
    );
  }, []);

  return (
    <div className='relative h-full w-full bg-[url("/images/hero.jpeg")] bg-fixed bg-no-repeat bg-cover bg-center'>
      <div className="w-full h-full">
        <nav className="px-12 py-5">
          <div className="w-full flex gap-2 bg-[#223143]">
            <img src="/images/logo.png" alt="logo" className="h-12" />
            <div className="flex gap-0.5 items-center text-2xl">
              <span className="text-white">Movie</span>
              <span className="text-emerald-400 font-medium">Stream</span>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <div className="bg-gray-700 px-16 py-16 self-center mt-10 lg:w-2/5 lg:max-w-md rounded-md w-full">
              <h2 className="text-white text-4xl mb-8 font-semibold text-center">
                {variant === "login" ? "LogIn" : "Sign Up"}
              </h2>
              <div className="flex flex-col gap-4">
                {variant === "signup" && (
                  <Input
                    label="Username"
                    id="name"
                    value={name}
                    onChange={(e: {
                      target: { value: React.SetStateAction<string> };
                    }) => setName(e.target.value)}
                  />
                )}
                <Input
                  label="Email"
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e: {
                    target: { value: React.SetStateAction<string> };
                  }) => setEmail(e.target.value)}
                />
                <Input
                  label="Password"
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e: {
                    target: { value: React.SetStateAction<string> };
                  }) => setPassword(e.target.value)}
                />
              </div>
              <button className="bg-green-500 py-3 text-white rounded-lg cursor-pointer w-full mt-10 hover:bg-green-700 transition">
                {variant === "login" ? "LogIn" : "Sign Up"}
              </button>
              <p className="text-neutral-300 mt-12 text-center">
                {variant === "login" ? "First time using our MovieStream? " : "Already have an acoount? "}
                <span
                  onClick={toggleVariant}
                  className="text-blue-400 mt-1 font-semibold hover:underline cursor-pointer"
                >
                  {variant === "login" ? "Sign Up" : "LogIn"}
                </span>
              </p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default AuthPage;
