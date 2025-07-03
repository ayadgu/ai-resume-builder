import React from "react";
import { Button } from "../../components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function SignInPage() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <SignIn />
      </div>
    </>
  );
}

export default SignInPage;
