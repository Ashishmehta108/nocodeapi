"use client";
import React, { useEffect, useState } from "react";
import Dashboard from "../(frontend)/Dashboard";
import { useAuth } from "../context/Authcontext";
import { useRouter } from "next/navigation";
import { Refresh2 } from "iconsax-reactjs";
export default function Home() {
  const router = useRouter();
  const auth = useAuth();
  const [isMounted, setisMounted] = useState(false);
  const user = auth?.user;
  // useEffect(() => {
  //   if (!auth.user) {
  //     router.push("/auth/login");
  //   }
  // }, []);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setisMounted(true);
  //   }, 2000);
  // }, []);
  // if (!isMounted) {
  //   return (
  //     <div className="animate-spin">
  //       <Loader />
  //     </div>
  //   );
  // }
  return (
    <>
      <Dashboard auth={auth} />
    </>
  );
}
