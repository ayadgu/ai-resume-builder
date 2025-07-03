import { Link, Navigate, Outlet } from "react-router-dom";
import { Button } from "./components/ui/button";
import { useUser } from "@clerk/clerk-react";
import Header from "./components/custom/header";

function App() {
  const { user, isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (!isSignedIn && isLoaded) {
    return <Navigate to="/auth/sign-in" replace />;
  }

  return (
    <>
      <Header />
      <Outlet></Outlet>
    </>
  );
}

export default App;
