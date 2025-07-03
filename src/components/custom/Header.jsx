import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";

function Header() {
  const { user, isLoaded, isSignedIn } = useUser();
  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <img src="/public/logo.svg" width={100} height={100} />
      {isSignedIn ? (
        <div className="flex items-center space-x-4">
          <Button>Dashboard</Button>
          <UserButton />
        </div>
      ) : (
        <Link to={"/auth/sign-in"}>
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
}

export default Header;
