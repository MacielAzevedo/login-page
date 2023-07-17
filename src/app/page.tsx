'use client';

import logoImage from '@/assets/logo.svg';
import Footer from '@/components/Footer';
import Form from '@/components/Form';
import Header from '@/components/header';

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center gap-8">
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
