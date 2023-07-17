import Image, { StaticImageData } from 'next/image';
import Heading from '../Heading';

interface HeaderProps {
  icon: StaticImageData;
  title: string;
  subtitle: string;
}

export default function Header({ icon, title, subtitle }: HeaderProps) {
  return (
    <header className="w-60 h-56 flex flex-col items-center gap-4 ">
      <Image src={icon} width={120} alt="React Logo" priority />
      <Heading size={'lg'}>{title}</Heading>
      <span className="text-lg text-gray-400">{subtitle}</span>
    </header>
  );
}
