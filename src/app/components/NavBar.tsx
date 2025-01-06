"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import LogoutButton from "./logoutbtn";

interface UserData {
  name: string;
  email: string;
  isAdmin: boolean;
}

function NavBar() {
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error("Error parsing JSON:", error);
        setUser(null); 
      }
    } else {
      setUser(null);
    }
  }, []);

  return (
    <header className="bg-green-800 px-8 py-5 max-w-[100vw] w-full ">
      <nav className="flex justify-between items-center mx-auto">
        <Link href="/" className="text-white text-2xl font-bold">
          My Blog
        </Link>
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/" className="text-white hover:underline-offset-1">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/pages/about"
              className="text-white hover:underline-offset-1"
            >
              About Us
            </Link>
          </li>
          {user?.isAdmin && (
            <li>
              <Link
                href="/pages/admin"
                className="text-white hover:underline-offset-1"
              >
                Admin
              </Link>
            </li>
          )}
          <li>
            <Link
              href="/pages/posts"
              className="text-white hover:underline-offset-1"
            >
              Posts
            </Link>
          </li>
          {user ? (
            <>
              <p className="text-white">{user.name}</p>
              <LogoutButton />
            </>
          ) : (
            <li>
              <Link
                href="/pages/login"
                className="text-white hover:underline-offset-1"
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
