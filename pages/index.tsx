import type { NextPage } from "next";
import Head from "next/head";
import Masthead from "../components/masthead";
import Header from "../components/header";
import Section1 from "../components/section1";
import Section2 from "../components/section2";
import Principles from "../components/principles";
import Joinus from "../components/joinus";
import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Head>
          <title>Design Group - Home</title>
          <meta
            name="description"
            content="Está afim de potencializar seus lucros por meio da identidade da sua empresa? em poucos minutos, Junte-se aos nossos clientes empreendedores e venha dar uma cara nova para o seu negócio."
          />
          <link rel="icon" href="img/logo2.png" />
        </Head>

        <Header />
        <Masthead />
        <Section1 />
        <Section2 />
        <Principles />
        <Joinus />
        <Footer />
      </div>
    </>
  );
};

export default Home;
