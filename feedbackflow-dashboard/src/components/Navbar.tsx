import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import HeaderMenu from "./header-menu";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="sticky top-0 inset-x-0 z-30 w-full transition-all border-b bg-white/20 backdrop-blur-md">
      <div className="w-full max-w-screen-xl px-2.5  relative mx-auto ">
        <div className="flex h-24 items-center justify-between ">
          
          <Link href={"/"}>
          
          <Image className="ml-10" src={"/logo.png"} alt={"logo"} width={100} height={100}></Image>
          
         </Link>
          <div>
            <SignedOut>
                    <SignUpButton>
                      <button
                        className={buttonVariants({
                          variant: "outline",
                          size: "default",
                          className: "bg-black text-white h-9 px-4 py-2 mr-2",
                        })}
                      >
                        Sign Up
                      </button>
                    </SignUpButton>
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
              <HeaderMenu />
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
