import Link from "next/link";
import { HoverLift } from "@/components/motion/HoverLift";

type CTAButtonProps = {
  href?: string;
  children: string;
  secondary?: boolean;
};

export function CTAButton({
  href = "#contact",
  children,
  secondary = false
}: CTAButtonProps) {
  return (
    <HoverLift>
      <Link className={secondary ? "button secondary" : "button"} href={href}>
        {children}
      </Link>
    </HoverLift>
  );
}
