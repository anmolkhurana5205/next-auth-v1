"use client";

import { useRouter } from "next/navigation";
import { Slot } from "@radix-ui/react-slot";

interface LoginButtonProps {
  mode?: "modal" | "redirect";
  children?: React.ReactNode;
  asChild?: boolean;
}

export const LoginButton = ({
  mode = "redirect",
  children,
  asChild,
}: LoginButtonProps) => {
  const router = useRouter();
  const onClick = () => {
    router.push("/auth/login");
  };
  if (mode === "modal") {
    return <span>TODO: Implement Modal</span>;
  }
  const Comp = asChild ? Slot : "span";
  return (
    <Comp onClick={onClick} className="cursor-pointer">
      {children}
    </Comp>
  );
};

// One can ask a question here about why we use a <span> instead of a <button> or other element.
// The reason is to allow for maximum flexibility with the `asChild` prop.
// By using a <span>, we can wrap any element passed as children, allowing it to retain its original styles and behavior.
// If we used a <button> or other element, it could interfere with the styles or functionality of the child component.
