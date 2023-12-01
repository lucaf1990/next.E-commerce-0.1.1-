import { getServerSideUser } from "@/lib/payload-utils";
import { cookies } from "next/headers";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Credentials = async () => {
  const nextCookies = cookies();
  const { user } = await getServerSideUser(nextCookies);
  console.log(user?.email);
  return (
    <MaxWidthWrapper>
      <div>
        <div>
          <p id="psw">{user?.email}</p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Credentials;
