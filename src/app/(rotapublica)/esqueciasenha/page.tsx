import { ForgotPasswordForm } from "@/features/auth/presentation/components/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">Recuperar senha</h1>
        <ForgotPasswordForm />
      </div>
    </main>
  );
}
