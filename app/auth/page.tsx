"use client";
/* eslint-disable @next/next/no-img-element */
import Input from "@/components/Input";
import SocialButton from "@/components/SocialButton";
import React, { useCallback, useState } from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";

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
            <div className="w-full flex gap-2 border rounded-full border-cyan-400 backdrop-blur-3xl bg-white/15">
            <img src="/images/logo.png" alt="logo" className="h-12 rounded-full" />
            <div className="flex gap-0.5 items-center text-2xl">
              <span className="text-white">Movie</span>
              <span className="text-emerald-400 font-medium">Stream</span>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <div className="backdrop-blur-3xl border border-green-300 rounded-4xl px-8 py-8 self-center mt-10 lg:w-1/3 lg:max-w-sm w-full">
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
              <div className="mt-4 flex">
                <SocialButton onClick={() => {}} icon={BsGithub} />
                <SocialButton onClick={() => {}} icon={BsGoogle} />
              </div>
              <p className="text-white mt-8 text-center">
                {variant === "login"
                  ? "First time using our MovieStream? "
                  : "Already have an acoount? "}
                <span
                  onClick={toggleVariant}
                  className="text-blue-200 mt-1 font-semibold hover:underline cursor-pointer"
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
