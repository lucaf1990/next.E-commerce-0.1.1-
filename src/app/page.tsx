import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import { buttonVariants } from "@/components/ui/button";
import {
  ArrowDownToLine,
  CheckCircle,
  Download,
  Leaf,
  LeafyGreenIcon,
  Verified,
} from "lucide-react";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const features = [
  {
    title: "Immediate Distribution",
    Icon: Download,
    description:
      "Receive your products swiftly through digital channels and access them instantly.",
  },
  {
    title: "Quality Assurance",
    Icon: Verified,
    description:
      "Each product on our platform undergoes rigorous verification to meet our top-notch standards. Not satisfied? We offer a 30-day satisfaction guarantee.",
  },
  {
    title: "Environmentally Friendly",
    Icon: LeafyGreenIcon,
    description:
      "We are dedicated to contributing 1% of sales towards the conservation and restoration of the natural environment.",
  },
];
interface IconComponentProps {
  Icon: React.ComponentType<any>; // React component type for the Icon
}
// Create a reusable icon component
const IconComponent: React.FC<IconComponentProps> = ({ Icon }) => (
  <div className="h-16 w-16 flex items-center justify-center rounded-full">
    {<Icon className="w-1/3 h-1/3" />}
  </div>
);

export default function Marketplace() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-24 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Your platform for top-tier{" "}
            <span className="text-red-600">next.E-commerce</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to next-E-commerce, where innovation meets ingenuity. We did
            not just take an idea; we redefined and reinvented it, giving birth
            to a new generation of e-commerce that prioritizes safety,
            intuitiveness, and a wealth of content.
          </p>
          <div className="gap-4 flex flex-col sm:flex-row mt-6">
            <Link href="/products" className={buttonVariants()}>
              Explore Latest
            </Link>
            <Link href="/our-commitment">
              {" "}
              <Button variant="ghost">Our story &rarr;</Button>
            </Link>
          </div>
        </div>

        <ProductReel
          query={{ sort: "desc", limit: 4 }}
          href="/products?sort=recent"
          title="Fresh Arrivals"
        />
      </MaxWidthWrapper>

      <section className="border-t border-red-600">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <IconComponent Icon={feature.Icon} />
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium ">{feature.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
