import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Credentials from "@/components/modifyCredentials";
import { ModeToggle } from "@/components/theme-toggle";
import { useTheme } from "next-themes";
import React from "react";

const SettingsTable = () => {
  return (
    <div className="mt-10">
      <MaxWidthWrapper>
        <div className="flex flex-col border p-4 rounded border-red-600 justify-center ">
          <div className="flex justify-between ">
            <div className="font-bold">Theme Mode</div>

            <div className="">
              <ModeToggle />
            </div>
          </div>
        </div>
        <div className="flex flex-col border p-4 rounded border-red-600 justify-center  mt-6 mb-6">
          <div className="flex justify-between ">
            <div className="font-bold text-right">My Email</div>

            <div className="">
              {" "}
              <Credentials />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default SettingsTable;
