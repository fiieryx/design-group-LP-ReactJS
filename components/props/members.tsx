import React from "react";
import styled from "styled-components";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

const Box = styled(motion.div)`
  width: 220px;
  height: 220px;
  margin: 20px;
  border-radius: 10px;
  border-width: 1px;
  background-color: rgba(131, 131, 131, 0.104);
  border-color: rgba(231, 231, 231, 0.199);
  transition: all;
  box-shadow: 5px 10px 15px 0px rgba(0, 0, 0, 0.4);
  overflow: hidden;
`;

interface Props {
  name: string;
  description: string;
  image: StaticImageData;
}

const Members: React.FC<Props> = ({ name, description, image }: Props) => {
  return (
    <Box
      className="flex justify-end items-center flex-col relative m-auto"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
    >
      <div className="h-full w-full">
        <Image
          src={image}
          layout="fill"
          alt="Icone do Usuario"
          className="object-contain "
          priority
          placeholder="blur"
        />
      </div>
      <div className="flex z-10 flex-col text-center text-xl font-bold w-full py-3 bg-slate-200">
        <h1>{name}</h1>
        <h2 className="text-xl font-normal">{description}</h2>
      </div>
    </Box>
  );
};

export default Members;
