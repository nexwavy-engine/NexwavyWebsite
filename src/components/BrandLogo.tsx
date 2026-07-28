import Image from "next/image";

export function BrandLogo({
  className = "h-9 w-auto",
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "white";
}) {
  const src = variant === "white" ? "/brand/nexwavy-logo-white.png" : "/brand/nexwavy-logo.png";

  return (
    <Image
      src={src}
      alt="Nexwavy Solutions"
      width={717}
      height={203}
      className={`object-contain ${className}`}
      priority
    />
  );
}
