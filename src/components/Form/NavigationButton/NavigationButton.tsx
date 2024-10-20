import { Button } from "@/components/ui/button";
import { PropsWithChildren } from "react";

export function NavigationButton({
  children,
  onClick,
}: PropsWithChildren<{ onClick: () => void }>) {
  return (
    <Button
      type="button"
      className="bg-accent text-accent-foreground rounded-full px-8 md:py-6 font-bold"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
