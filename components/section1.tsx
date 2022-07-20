import React, { useEffect, useState } from "react";
import Image from "next/image";
import Members from "./props/members";
import { motion } from "framer-motion";
import { AnimationVariants, Animationitem } from "./props/AnimationIFR";

const Section1: React.FC = () => {
  return (
    <>
      <section className=" flex flex-col bg-slate-800 py-10 pb-48">
        <article className="flex flex-col lg:flex-row-reverse items-center mx-auto w-5/6 max-w-screen-2xl">
          <motion.div
            variants={Animationitem}
            initial="hidden"
            whileInView="show"
            className="max-w-[300px] sm:max-w-sm lg:max-w-xl justify-center flex-1"
            viewport={{ once: true, margin: "-20%" }}
          >
            <Image
              src="/il1.svg"
              height={"600"}
              loading="lazy"
              width={"600"}
              alt="Boneco"
            />
          </motion.div>

          <motion.div
            className="container text-white mx-auto flex-1"
            variants={AnimationVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20%" }}
          >
            <motion.div
              className="flex flex-col text-4xl sm:text-6xl items-start font-bold pb-10 "
              variants={Animationitem}
            >
              <h1>Afinal,</h1>
              <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">
                Quem somos nós?
              </h1>
            </motion.div>

            <motion.div
              variants={Animationitem}
              className="flex-col justify-center tracking-tight text-2xl pr-10"
            >
              <p>
                {" "}
                Iniciado em 2017 na rede social Skype, 4 amigos Designers
                decidiram criar um grupo onde se reuniu{" "}
                <strong>apenas os melhores.</strong> Desde 2018, nosso time de
                designers já desenvolveu os <strong>melhores</strong> e{" "}
                <strong>mais variados</strong> criativos para empresas{" "}
                <strong>por todo o Brasil.</strong>
              </p>
            </motion.div>

            <motion.div variants={Animationitem}>
              <button className="mt-10 text-lg bg-blue-700 py-3 px-10 rounded-md hover:bg-blue-800 transition-all duration-200 font-bold">
                Saiba Mais
              </button>
            </motion.div>
          </motion.div>
        </article>
        <div className="pt-20 pb-10 flex flex-col text-4xl items-center font-bold text-white">
          <h1>Nosso Time</h1>
          <h1 className="font-normal text-3xl pt-3">Os melhores.</h1>
        </div>

        <motion.div
          className="flex justify-center flex-wrap max-w-screen-lg mx-auto text-black"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "Tween",
            duration: 0.8,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          <Members
            name="Daniel Ribeiro"
            description="@daniboy"
            image="/img/daniel.png"
          />
          <Members
            name="Antonio charutos"
            description="@sythed"
            image="/img/sulista.jpeg"
          />
          <Members
            name="Márcio Gabriel"
            description="@marciogabrielsf"
            image="/img/marcio.png"
          />
          <Members
            name="Augusto Dimiscosta"
            description="@augusto"
            image="/img/augusto.jpeg"
          />
          <Members
            name="Diego"
            description="@Vr4g404"
            image="/img/diego2.jpeg"
          />
        </motion.div>
      </section>
      <div className="relative">
        <div className="absolute bottom-0 left-0 w-full overflow-hidden rotate-180 ">
          <svg
            className="relative block w-[calc(132%+1.3px)] h-16 lg:h-36"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-white"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};
export default Section1;
