"use client ";
import Image from "next/image";
import { SignupForm } from "@/app/ui/signup-form";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen ">
      <div className="flex-1 flex items-center justify-center p-8">
        <SignupForm />
      </div>
    </div>
  );
}
