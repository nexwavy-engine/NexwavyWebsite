"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/tracking";

interface TrackedLinkProps {
  href: string;
  eventName: string;
  className?: string;
  children: React.ReactNode;
  external?: boolean;
  eventData?: Record<string, unknown>;
}

export default function TrackedLink({
  href,
  eventName,
  className,
  children,
  external = false,
  eventData,
}: TrackedLinkProps) {
  const commonProps = {
    className,
    onClick: () => trackEvent(eventName, eventData),
  };

  if (external || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} {...commonProps}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...commonProps}>
      {children}
    </Link>
  );
}
