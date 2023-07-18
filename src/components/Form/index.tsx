import { Check, EnvelopeSimple, Lock } from 'phosphor-react';
import Button from '../Button';
import * as Checkbox from '@radix-ui/react-checkbox';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import FormError from './components/FormError';
import Input from './components/Input';

const LoginFormSchema = z.object({
  email: z
    .string()
    .regex(/^[a-z0-9.]+@[a-z]+\.[a-z]+(\.[a-z]+)?$/i, {
      message: 'Digite um e-mail válido!',
    })
    .transform((email) => email.toLowerCase()),

  password: z.string().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i, {
    message: 'Mínimo de oito caracteres, pelo menos uma letra e um número',
  }),
});

type LoginFormData = z.infer<typeof LoginFormSchema>;

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginFormSchema),
  });

  function handleLoginSubmit(data: LoginFormData) {
    console.log(data);
    alert('Login efetuado com sucesso!');
  }

  return (
    <form
      className="max-w-[400px] w-full flex flex-col gap-2"
      onSubmit={handleSubmit(handleLoginSubmit)}
    >
      <Input
        type="text"
        title="Endereço de e-mail"
        content="usuario@email.com"
        icon={<EnvelopeSimple size={24} color="#7C7C8A" />}
        {...register('email')}
        autoComplete="off"
      />
      <div className="h-6">
        {errors.email && <FormError>{errors.email.message}</FormError>}
      </div>

      <Input
        type="password"
        title="Digite sua senha"
        content="password"
        icon={<Lock size={24} color="#7C7C8A" />}
        {...register('password')}
        autoComplete="off"
      />
      <div className="h-6">
        {errors.password && <FormError>{errors.password.message}</FormError>}
      </div>

      <div className="flex items-center gap-[10px] my-4">
        <Checkbox.Root
          id="ci"
          className="bg-gray-800 flex justify-center items-center w-6 h-6"
        >
          <Checkbox.Indicator className="text-cyan-500 flex items-center">
            <Check size={24} />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label htmlFor="ci">Lembrar de mim por 30 dias</label>
      </div>

      <Button type="submit" disabled={isSubmitting}>
        Entrar na plataforma
      </Button>
    </form>
  );
}
