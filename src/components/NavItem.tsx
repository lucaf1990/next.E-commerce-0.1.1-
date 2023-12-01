"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

type Category = (typeof PRODUCT_CATEGORIES)[number];

interface NavItemProps {
  category: Category;
  handleOpen: () => void;
  close: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}

const NavItem = ({
  isAnyOpen,
  category,
  handleOpen,
  close,
  isOpen,
}: NavItemProps) => {
  const themes = useTheme();
  return (
    <div className="flex">
      <div className="relative flex items-center text-white">
        <Button
          className="gap-1.5"
          onClick={handleOpen}
          variant={isOpen ? "secondary" : "ghost"}
        >
          {category.label}
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-all text-muted-foreground text-white  hover:text-red-600 ",
              {
                "-rotate-180 text-red-600": isOpen,
              }
            )}
          />
        </Button>
      </div>

      {isOpen ? (
        <div
          onClick={() => close()}
          className={cn(
            "absolute inset-x-0 top-full text-sm text-muted-foreground",
            {
              "animate-in fade-in-10 slide-in-from-top-5": !isAnyOpen,
            }
          )}
        >
          <div
            className={cn("absolute inset-0 top-1/2 z-20")}
            aria-hidden="true"
          />

          <div className={cn("relative")}>
            <div className="mx-auto max-w-7xl px-8 ">
              <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-8 ">
                <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8  bg-red-600 p-10 rounded-md text-white">
                  {category.featured.map((item) => (
                    <div
                      onClick={() => close}
                      key={item.name}
                      className="group relative text-base sm:text-sm "
                    >
                      <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100   group-hover:opacity-75">
                        <Image
                          src={item.imageSrc}
                          alt="product category image"
                          fill
                          className="object-cover object-center"
                        />
                      </div>

                      <Link
                        href={item.href}
                        className="mt-6 block font-medium text-white"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-1" aria-hidden="true">
                        Shop now
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavItem;
