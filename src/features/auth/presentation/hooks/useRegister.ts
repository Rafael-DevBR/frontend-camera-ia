import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { HttpRegisterRepository } from "../../data/repositories/HttpRegisterRepository";
import { RegisterUseCase } from "../../domain/use-cases/RegisterUserUseCase";
import { RegisterUser } from "../../domain/entities/RegisterUser";

const registerRepository = new HttpRegisterRepository();
const registerUseCase = new RegisterUseCase(registerRepository);

export function useRegister() {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: RegisterUser) => registerUseCase.execute(data),
    onSuccess: () => {
      router.push("/login");
    },
  });
}
