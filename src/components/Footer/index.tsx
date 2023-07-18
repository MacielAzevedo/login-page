import Link from 'next/link';

interface FooterProps {
  text: string;
  subtext: string;
}

export default function Footer({ text, subtext }: FooterProps) {
  return (
    <footer className="w-[231px] h-[50px] flex flex-col items-center gap-4">
      <Link
        href="#"
        className="text-sm underline text-gray-400 hover:opacity-70 text-center"
      >
        {text}
      </Link>
      <Link
        href="#"
        className="text-sm underline text-gray-400 hover:opacity-70 text-center"
      >
        {subtext}
      </Link>
    </footer>
  );
}
