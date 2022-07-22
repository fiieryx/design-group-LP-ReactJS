import React from "react";
import Input from "./props/input";
import Logo from "../public/img/logo2.png";
import Image from "next/image";

const Joinus: React.FC = () => {
  return (
    <>
      <section
        id="Contato"
        className="min-h-screen flex flex-col justify-around items-center bg-slate-900 text-white px-7 py-10"
      >
        <div className="max-w-md ">
          <Image height={50} width={50} src={Logo} alt="Design Group" />
          <div className="flex flex-col font-bold text-4xl my-2">
            <span>Gostou da gente?</span>
            <span>Entre em contato!</span>
            <span className="text-gray-400 text-base my-3">
              Envie um e-mail para{" "}
              <a
                className="text-slate-200"
                href="mailto:contato@designgroup.com"
              >
                contato@designgroup.com
              </a>{" "}
              ou responda o formulário abaixo:
            </span>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-5 mt-4 transition-all duration-300">
            <Input name="name" placeholder=" " label="Seu Nome" />
            <Input name="email" placeholder=" " label="Seu E-mail" />
            <div className="relative z-0 col-span-2">
              <Input
                name="input"
                placeholder=" "
                label="O Que você faria para matar daniel?"
              />
            </div>
            <div className="relative z-0 col-span-2">
              <textarea
                name="message"
                rows={5}
                placeholder=" "
                className="mt-5 peer block w-full appearance-none bg-transparent border-2 border-gray-700 rounded-md p-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-0 duration-300 transition"
              />
              <label className="absolute top-7 text-gray-400 left-0 -translate-y-7 scale-[.8] -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:left-2 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-7 peer-focus:scale-[.8] peer-focus:left-0 peer-focus:text-slate-200 transition-all duration-300">
                Sua Mensagem
              </label>
            </div>
          </div>
          <div className="flex justify-end">
            <button className="mt-5 text-lg bg-blue-700 py-2 px-10 rounded-md hover:bg-blue-800 transition-all duration-200 font-bold">
              Enviar
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Joinus;
