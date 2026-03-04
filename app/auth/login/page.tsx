import { LoginForm } from "./login-form";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen ">
      <div className="flex-1 flex items-center justify-center p-8">
        <LoginForm />
      </div>
    </div>
  );
}
