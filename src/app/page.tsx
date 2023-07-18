'use client';

import logoImage from '@/assets/logo.svg';
import Footer from '@/components/Footer';
import Form from '@/components/Form';
import Header from '@/components/header';

export default function Home() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center flex-col gap-8 p-4">
      <Header
        icon={logoImage}
        title="Ignite Lab"
        subtitle="Faça login e comece a usar"
      />

      <Form />

      <Footer
        text="Esqueceu sua senha?"
        subtext="Não possui conta? Crie uma agora!"
      />
    </main>
  );
}
