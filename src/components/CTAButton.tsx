import Link from "next/link";
import { HoverLift } from "@/components/motion/HoverLift";

type CTAButtonProps = {
  href?: string;
  children: string;
  secondary?: boolean;
  glow?: boolean;
  glowVariant?: "hero" | "navy";
  newTab?: boolean;
};

export function CTAButton({
  href = "#contact",
  children,
  secondary = false,
  glow = false,
  glowVariant = "hero",
  newTab = false,
}: CTAButtonProps) {
  const className = secondary
    ? "button secondary"
    : glow
      ? "button button-glow"
      : "button";

  const isExternal = /^https?:\/\//i.test(href);

  const link = newTab || isExternal ? (
    <a
      className={className}
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noreferrer" : undefined}
    >
      {children}
    </a>
  ) : (
    <Link className={className} href={href}>
      {children}
    </Link>
  );

  if (glow) {
    return (
      <HoverLift>
        <span
          className={
            glowVariant === "navy"
              ? "button-glow-wrap button-glow-wrap--navy"
              : "button-glow-wrap"
          }
        >
          {link}
        </span>
      </HoverLift>
    );
  }

  return <HoverLift>{link}</HoverLift>;
}
