import { useMutation } from "@tanstack/react-query";
import { ForgotPasswordUseCase } from "../../domain/use-cases/ForgotPasswordUseCase";
import { HttpAuthRepository } from "../../data/repositories/HttpAuthRepository";

const repository = new HttpAuthRepository();
const forgotPasswordUseCase = new ForgotPasswordUseCase(repository);

export function useForgotPassword(){
  return useMutation({
    mutationFn:(email:string)=>
      forgotPasswordUseCase.execute(email)
  });

}