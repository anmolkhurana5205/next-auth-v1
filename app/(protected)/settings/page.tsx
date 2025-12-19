"use client";

import { Button } from "@/components/ui/button";
import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/use-current-user";

const SettingPage = () => {
  const user = useCurrentUser();

  return (
    <div className="bg-white p-10 rounded-xl">
      <Button
        size="sm"
        variant="destructive"
        className="cursor-pointer"
        type="submit"
        onClick={logout}
      >
        Sign out
      </Button>
    </div>
  );
};

export default SettingPage;
