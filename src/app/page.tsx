"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Homepage from "@/components/Homepage";
import { ChakraProvider } from "@chakra-ui/react";
import Title from "@/components/Title";
export default function Home() {
  return (
    <ChakraProvider>
      {/* <Title /> */}
      <Homepage />
    </ChakraProvider>
  );
}
