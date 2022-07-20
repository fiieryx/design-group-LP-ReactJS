import React, { useState, useEffect, useRef, useContext } from "react";
import { ScrollContext } from "./props/scroll-observer";
import { BsArrowDownShort } from "react-icons/bs";

const Masthead: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    setImageLoaded(true); //assim q a pagina carregar starta as animações da interface
  });

  return (
    <div
      className=" min-h-screen flex flex-col items-center justify-center sticky top-0 -z-10 text-white"
      ref={refContainer}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`absolute w-screen h-screen object-cover`}
        src="/vid/bg.mp4"
        style={{ transform: `translateY(${progress * 20}vh)` }}
      />
      <div
        className={`p-12 pb-0 font-bold drop-shadow-[0_5px_3px_rgba(0,0,0,0.5)] text-center flex-1 flex items-center justify-center flex-col transition-all duration-1000 delay-300 ${
          imageLoaded ? "opacity-100" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="mb-6 text-3xl xl:text-5xl t ">Design Group</h1>
        <h2 className="mb-2 text-xl xl:text-3xl tracking-tight">
          <span>Levando sua empresa a outro nível,</span>
          <span> do jeito certo.</span>
        </h2>
      </div>
      <div
        className={`flex-col justify-center mb-32 sm:mb-16 text-lg drop-shadow-[0_3px_3px_rgba(0,0,0,0.6)] tracking-wider z-0 transition-all duration-1000 delay-500 hover:text-gray-200 ${
          imageLoaded ? "opacity-100" : "opacity-0 translate-y-10"
        }`}
      >
        <h2>
          <a href="#">[ vamos nessa! ]</a>
        </h2>
        <BsArrowDownShort className="text-3xl m-auto mt-2" />
      </div>
    </div>
  );
};

export default Masthead;
