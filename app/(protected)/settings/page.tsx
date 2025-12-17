"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { logout } from "@/actions/logout";

const SettingPage = () => {
  const router = useRouter();

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.replace("/auth/login");
    },
  });

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>

      <form action={logout}>
        <Button
          size="sm"
          variant="destructive"
          className="cursor-pointer mt-4"
          type="submit"
        >
          Sign out
        </Button>
      </form>
    </div>
  );
};

export default SettingPage;
