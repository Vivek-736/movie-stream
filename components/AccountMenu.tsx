import React from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import useCurrentUser from "@/hooks/useCurrentUser";
import { LogOut } from "lucide-react";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu = ({ visible }: AccountMenuProps) => {
  const { data: user } = useCurrentUser();

  if (!visible) return null;

  return (
    <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <Image
            className="w-8 rounded-md"
            src={user?.image || "/images/user.png"}
            alt="User Icon"
            width={32}
            height={32}
          />
          <p className="text-white text-sm group-hover/item:underline">
            {user?.name}
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4" />
        <div
          onClick={() => signOut()}
          className="px-3 text-center text-red-500 text-sm flex gap-3 hover:text-red-900"
        >
          <LogOut />
          <span>Sign Out</span>
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
