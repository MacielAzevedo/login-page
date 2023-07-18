import Image, { StaticImageData } from 'next/image';
import Heading from '../Heading';

interface HeaderProps {
  icon: StaticImageData;
  title: string;
  subtitle: string;
}

export default function Header({ icon, title, subtitle }: HeaderProps) {
  return (
    <header className="flex items-center flex-col gap-4 ">
      <Image src={icon} width={120} alt="React Logo" priority />
      <Heading>{title}</Heading>
      <span className="text-lg text-gray-400">{subtitle}</span>
    </header>
  );
}
