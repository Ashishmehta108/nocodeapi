"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { startTransition, useState } from "react";
import { Login } from "../actions/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import google from "../../../public/google.svg";
import { Icons } from "@/components/ui/icons";
import { useActionState } from "react";
import { Eye, EyeSlash, Sms, Key, User } from "iconsax-reactjs";
import Image from "next/image";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "../../firebase/firebaseconfig";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function LoginForm() {
  console.log("hi");

  const signinWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(auth, provider);
  };
  const signupwithemail = async () => { };
  const [state, formAction] = useActionState(Login, null);
  const [togglepwd, settogglepwd] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = handleSubmit((data, event) => {
    event?.preventDefault();
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => formData.append(key, value));
    startTransition(() => {
      formAction(formData);
    });
  });

  return (
    <>
      <Card className="w-full border-none shadow-none max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Login</CardTitle>
          <CardDescription className="text-md"> Welcome Back !</CardDescription>
        </CardHeader>
        <CardContent>
          <div
            className="bg-neutral-100 hover:bg-neutral-200/70 p-2 flex items-center justify-center rounded-md cursor-pointer"
            onClick={signinWithGoogle}
          >
            <Image src={google} alt="google" className="mr-2 w-6 h-6" />
            <span className="font-[520] text-neutral-600 ">Google</span>
          </div>
          <div className="px-2 my-2  flex items-center ">
            <div className="w-[50%] h-px bg-neutral-200"></div>
            <div className="mx-2">or</div>
            <div className="w-[50%] h-px bg-neutral-200"></div>
          </div>
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-2 relative">
              <Label htmlFor="name">Name</Label>
              <User variant="Bold" className="w-5 h-5 absolute translate-y-2 translate-x-1 text-neutral-500 " />
              <Input
                id="name"
                className="pl-8"
                placeholder="Ashish Mehta"
                {...register("name")}
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="space-y-2 relative ">
              <Label htmlFor="email">Email</Label>
              <Sms variant="Bold" className="w-5 h-5 absolute translate-y-2 translate-x-1 text-neutral-500 " />
              <Input
                id="email"
                className="pl-8"
                type="email"
                placeholder="Ashish@example.com"
                {...register("email")}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2 relative">
              <Label htmlFor="password">Password</Label>
              <Key variant="Bold" className="w-5 h-5 absolute translate-y-2 translate-x-1 text-neutral-500 " />
              {togglepwd ? (
                <Eye
                  variant="Bold"
                  className="w-5 h-5 absolute translate-y-2 -translate-x-2 right-0 text-neutral-500 "
                  onClick={() => settogglepwd(!togglepwd)}
                />
              ) : (
                <EyeSlash
                  variant="Bold"
                  className="w-5 h-5 absolute translate-y-2 -translate-x-2 right-0 text-neutral-500 "
                  onClick={() => settogglepwd(!togglepwd)}
                />
              )}
              <Input
                id="password"
                className="pl-8"
                type={togglepwd ? "password" : "text"}
                placeholder="••••••••"
                {...register("password")}
                aria-invalid={errors.password ? "true" : "false"}
              />
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Login"
              )}
            </Button>
          </form>
          {state?.errors && (
            <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
              {Object.values(state.errors).map((error, index) => (
                <p key={index}>{error[0]}</p>
              ))}
            </div>
          )}
          {state?.success && (
            <div className="mt-4 p-4 bg-green-100 text-green-700 rounded ">
              Account Logged in successfully!
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
}
