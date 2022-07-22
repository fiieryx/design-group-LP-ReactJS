import React from "react";
import Logo from "../public/img/logo2.png";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <div className="sticky top-0">
      <footer className="min-h-full items-center bg-slate-900 text-gray-200 flex flex-wrap justify-center gap-8 px-10 pb-20">
        <Link href="/">
          <Image height={35} width={35} src={Logo} alt="Design Group" />
        </Link>
        <Link href="/privacy">Privacidade</Link>
        <Link href="/">LinkedIn</Link>
        <Link href="/">GitHub</Link>
        <Link href="/">Twitter</Link>
      </footer>
    </div>
  );
};

export default Footer;
