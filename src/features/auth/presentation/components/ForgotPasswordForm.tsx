"use client";

import { useState } from "react";
import { Mail, Loader2 } from "lucide-react";
import { useForgotPassword } from "../hooks/useForgotPassword";

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  const { mutate, isPending, isSuccess } = useForgotPassword();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    mutate(email);
  }

  if (isSuccess) {
    return (
      <div className="p-4 rounded-lg bg-green-100 text-green-800">
        Enviamos um link de recuperação para seu email.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <label>Email</label>

      <div className="relative">
        <Mail className="absolute left-3 top-3 text-gray-400" />

        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="nome@email.com"
          className="w-full pl-10 p-3 rounded-lg"
        />
      </div>

      <button
        disabled={isPending}
        className="w-full bg-emerald-600 text-white p-3 rounded-lg"
      >
        {isPending ? (
          <>
            <Loader2 className="animate-spin inline mr-2" />
            Enviando...
          </>
        ) : (
          "Enviar recuperação"
        )}
      </button>
    </form>
  );
}
