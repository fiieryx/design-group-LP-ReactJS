import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { MdMail } from "react-icons/md";

const Itens = styled.li`
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    color: #dfdfdf;
  }
`;

const Header: React.FC = () => {
  const [ImageLoaded, setImageloaded] = useState(false);

  useEffect(() => {
    setImageloaded(true);
  }, []);

  return (
    <header className="bg-gradient-to-b from-slate-400">
      <nav className="h-20 flex items-center -mb-20">
        <div
          className={`flex w-full items-center justify-around z-10 transition-all duration-1000 delay-400 
          ${ImageLoaded ? "opacity-100" : "opacity-0 -translate-y-10"}`}
        >
          <span className="hover:scale-110 transition-all duration-200">
            <Link href={"/"}>
              <Image
                width="50"
                height="50"
                src="/img/logo2.png"
                alt="Logo"
                className="z-10 cursor-pointer"
              />
            </Link>
          </span>
          <ul className="hidden md:flex text-xl gap-10 z-10 items-center text-white font-semibold">
            <Itens>
              <Link href={"/"}>Home</Link>
            </Itens>
            <Itens>
              <Link href="/#Section1" scroll={false}>
                <a>Sobre nós</a>
              </Link>
            </Itens>
            <Itens>
              <Link href={"/#Team"}>Nosso time</Link>
            </Itens>
            <Link href={"/#Contato"}>
              <button
                className="px-6 py-2 font-bold rounded-md bg-blue-700 hover:bg-blue-800 transition-colors
            duration-300 tracking-tight inline-flex gap-2 items-center"
              >
                <MdMail /> Contato
              </button>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
