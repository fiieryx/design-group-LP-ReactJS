import React from "react";
import { motion } from "framer-motion";
import { Animationitem, AnimationVariants } from "./props/AnimationIFR";

const principles: React.FC = () => {
  return (
    <section className="flex my-20 justify-center items-center">
      <motion.div
        className="mx-auto px-10 lg:max-w-[80%] lg:px-10 "
        initial="hidden"
        whileInView="show"
        variants={AnimationVariants}
        viewport={{ once: true, margin: "-15%" }}
      >
        <motion.h1
          className="text-4xl font-bold mb-5 text-slate-900"
          variants={Animationitem}
        >
          Nada fora do esperado.
        </motion.h1>
        <motion.h2
          variants={Animationitem}
          className="leading-[2.5rem] text-xl text-left text-slate-600 lg:text-2xl"
        >
          Nós acreditamos no princípio da boa comunicação e de um
          desenvolvimento completamente transparente. Não vamos alterar nada sem
          te consultar antes.
        </motion.h2>
      </motion.div>
    </section>
  );
};

export default principles;
