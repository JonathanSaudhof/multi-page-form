import { Button } from "@/components/ui/button";
import { PropsWithChildren } from "react";

export function CTA({
  children,
  onClick,
}: PropsWithChildren<{ onClick: () => void }>) {
  return (
    <Button
      type="button"
      className="bg-orange-500 text-accent-foreground rounded-full px-8 py-6 w-full font-bold"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
