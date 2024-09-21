import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 inset-x-0 z-30 w-full transition-all">
      <div className="w-full max-w-screen-xl px-2 lg:px-20 relative mx-auto border-b">
        <div className="flex h-24 items-center justify-between ">
          <h1>LOGO</h1>
          <div>
            <SignedOut>
              <SignInButton>
                <button
                  className={buttonVariants({
                    variant: "outline",
                    size: "default",
                    className: "bg-black text-white h-9 px-4 py-2",
                  })}
                >
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
