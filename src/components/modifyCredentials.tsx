import { getServerSideUser } from "@/lib/payload-utils";
import { cookies } from "next/headers";
import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";

const Credentials = async () => {
  const nextCookies = cookies();
  const { user } = await getServerSideUser(nextCookies);
  console.log(user?.email);
  return (
    <MaxWidthWrapper>
      <div>
        <div>
          <p id="psw">
            {user?.email ? (
              user.email
            ) : (
              <div>
                {" "}
                <p>
                  You are not logged in {"   "}
                  <Link href="/sign-in" className=" hover:text-red-600">
                    {" "}
                    Sign-in here now!
                  </Link>
                </p>{" "}
              </div>
            )}
          </p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Credentials;
