import Image from "next/image";

export function BrandLogo({ className = "h-9 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/brand/nexwavy-logo.png"
      alt="Nexwavy Solutions"
      width={717}
      height={203}
      className={className}
      priority
    />
  );
}
