import React from "react";
import { motion } from "framer-motion";
import { Animationitem, AnimationVariants } from "./props/AnimationIFR";
import Image from "next/image";
import MockupCelular from "../public/img/Mockup1.png";

const principles: React.FC = () => {
  return (
    <section className="bg-white">
      <div className=" w-[80%] m-auto py-20">
        <div className="flex items-center justify-center flex-col md:flex-row ">
          <motion.div className="flex-1 sm:p-12 max-w-sm p-4">
            <Image src={MockupCelular} alt="teste" priority={true}></Image>
          </motion.div>
          <motion.div
            className="flex-1 max-w-2xl my-5 order-2"
            initial="hidden"
            whileInView="show"
            variants={AnimationVariants}
            viewport={{ once: true, margin: "-15%" }}
          >
            <motion.h1
              className="text-4xl font-bold mb-5 text-slate-800"
              variants={Animationitem}
            >
              Seu negócio do jeitinho que você sempre desejou.
            </motion.h1>
            <motion.p
              variants={Animationitem}
              className="leading-[2.5rem] text-xl text-left text-slate-600 lg:text-2xl"
            >
              Nós acreditamos no princípio da boa comunicação e de um
              desenvolvimento completamente transparente. Não vamos alterar nada
              sem te consultar antes.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default principles;
