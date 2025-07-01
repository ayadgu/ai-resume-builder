import React from "react";
import { Button } from "../../components/ui/button";

function SignInPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-4">Sign In</h1>
      <p className="mb-8">Enter your credentials to access your account.</p>
      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 border rounded"
        />
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
}

export default SignInPage;
