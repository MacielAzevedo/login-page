import { Check, EnvelopeSimple, Lock } from 'phosphor-react';
import Button from '../Button';
import * as Checkbox from '@radix-ui/react-checkbox';
import Input from './components/Input';

export default function Form() {
  return (
    <form className="w-[400px] flex flex-col gap-4">
      <Input
        type="text"
        title="Endereço de e-mail"
        content="usuario@email.com"
        icon={<EnvelopeSimple size={24} color="#7C7C8A" />}
      />

      <Input
        type="password"
        title="Digite sua senha"
        content="password"
        icon={<Lock size={24} color="#7C7C8A" />}
      />

      <div className="flex items-center gap-[10px] mb-8">
        <Checkbox.Root className="bg-gray-800 flex justify-center items-center w-6 h-6">
          <Checkbox.Indicator className="text-cyan-500 flex items-center">
            <Check size={24} />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label htmlFor="ci">Lembrar de mim por 30 dias</label>
      </div>

      <Button type="submit" variant={'PRIMARY'}>
        Entrar na plataforma
      </Button>
    </form>
  );
}
