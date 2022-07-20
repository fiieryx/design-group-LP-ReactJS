import React from "react";
import {
  BsLightningFill,
  BsLockFill,
  BsFillLightbulbFill,
} from "react-icons/bs";
import { Minisections } from "./props/minisection";
import styled from "styled-components";

const Header2 = styled.h2`
  text-align: center;
  font-weight: normal;
  color: #3b3b3b;
  font-size: 20px;
`;

const section2: React.FC = () => {
  return (
    <section className="py-10 px-5">
      <div className="grid md:grid-flow-col auto-cols-fr p-8 shadow-[0_15px_20px_rgba(0,0,0,0.4)] gap-16 md:gap-20 text-2xl max-w-6xl font-bold m-auto bg-slate-200 rounded-2xl">
        <Minisections>
          <BsFillLightbulbFill className=" text-5xl" />
          <h1>Exclusividade</h1>
          <Header2>
            Toda idéia é construida do zero e desenvolvida junto a você.
          </Header2>
        </Minisections>
        <Minisections>
          <BsLockFill className=" text-5xl" />
          <h1>Privacidade</h1>
          <Header2>Seus dados estão protegidos como nunca.</Header2>
        </Minisections>
        <Minisections>
          <BsLightningFill className=" text-5xl" />
          <h1>Entrega</h1>
          <Header2>
            Em um piscar de olhos o seu negócio terá uma cara nova.
          </Header2>
        </Minisections>
      </div>
    </section>
  );
};

export default section2;
