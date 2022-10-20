import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import { useEffect, useState } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { ethers } from "ethers";

function MyApp({ Component }: AppProps) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Alan J. Droste" key="ogtitle" />
        <meta
          property="og:description"
          content="Zealous Advocacy, Creative Solutions."
          key="ogdesc"
        />
        <meta
          property="og:image"
          content="https://i.imgur.com/BKbNUjx.png"
          key="ogimage"
        />
        <title>Alan J. Droste</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component />
      <Footer />
    </>
  );
}

export default MyApp;
