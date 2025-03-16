"use client";
import React from 'react'
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useRouter } from 'next/navigation';

const Profile = () => {
    const {data: user} = useCurrentUser();
    const router = useRouter();

    return (
        <div className="min-h-screen bg-black text-white">
        <div className="relative h-screen w-full">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          </div>
  
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
  
          <div className="flex mb-4 gap-0.5 items-center md:text-6xl text-2xl">
              <span className="text-white">Movie</span>
              <span className="text-emerald-400 font-medium">Stream</span>
          </div>
  
            <p className="mb-8 max-w-2xl text-lg text-gray-300 sm:text-xl">
              Welcome back, {user?.name}! We&apos;re excited to have you with us. Continue your cinematic journey right where you left off.
            </p>
  
            <Button onClick={() => router.push("/")} className="group relative overflow-hidden rounded-full bg-white/10 px-8 py-6 text-lg font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20">
              <span className="flex items-center cursor-pointer gap-2">
                Enter
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-600/40 to-blue-600/40 opacity-0 blur transition-opacity group-hover:opacity-100"></span>
            </Button>
  
          </div>
  
        </div>
      </div>
    )
}

export default Profile
