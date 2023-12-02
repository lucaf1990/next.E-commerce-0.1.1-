"use client";

import { usePathname } from "next/navigation";
import MaxWidthWrapper from "./MaxWidthWrapper";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Linkedin, LinkedinIcon } from "lucide-react";
import { Input } from "./ui/input";
const Footer = () => {
  const message =
    "  This is a development sandbox. The products, transactions, and information displayed on this site are entirely fictional and used solely for showcasing coding and design skills. No real purchases or transactions can be made on this platform.";
  const pathname = usePathname();
  const pathsToMinimize = ["/verify-email", "/sign-up", "/sign-in"];
  const themes = useTheme();
  return (
    <footer className=" flex-grow-0">
      <MaxWidthWrapper>
        <div className="border-t border-gray-200">
          {pathsToMinimize.includes(pathname) ? null : (
            <div className="pb-8 pt-16">
              <div className="flex justify-center">
                <Link href="/" className="">
                  {themes.theme !== "light" ? (
                    <Image
                      src="/nextE-commerce-logos_white.png"
                      alt="LOGO"
                      width={300}
                      height={300}
                      className="mt-16"
                    />
                  ) : (
                    <Image
                      src="/nextE-commerce-logos_black.png"
                      alt="LOGO"
                      width={300}
                      height={300}
                      className="mt-16"
                    />
                  )}
                </Link>
              </div>
            </div>
          )}

          {pathsToMinimize.includes(pathname) ? null : (
            <div>
              <div className="relative flex items-center px-6 py-6 sm:py-8 lg:mt-0">
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-br bg-opacity-90"
                  />
                </div>

                <div className="text-center relative mx-auto max-w-sm">
                  <h3 className="font-semibold ">Become a seller now!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    <Link
                      href="/sign-in?as=seller"
                      className="whitespace-nowrap font-medium hover:text-red-900"
                    >
                      Get started &rarr;
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="py-10 md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} All Rights Reserved
            </p>
          </div>

          <div className="mt-4 flex items-center justify-center md:mt-0">
            <div className="flex space-x-8">
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-red-600"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-red-600"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm text-muted-foreground hover:text-red-600"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="flex text-xs justify-center mb-10 mx-auto mr-10 mt-20">
        <Input type="text" value={message} disabled content="message" />

        <Link
          target="_blank"
          href="https://www.linkedin.com/in/luca-forma-987024270/"
          className="text-white hover:text-red-600 "
        >
          For any inquiries, contact{" "}
          <Linkedin className="bg-blue-400 rounded-sm text-white border-2  border-white " />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
