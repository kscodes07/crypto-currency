"use client";
import React from "react";

import { ChakraProvider, Box } from "@chakra-ui/react";
import Title from "./Title";
import VarianceList from "./VarianceList";

function Homepage() {
  return (
    <ChakraProvider>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Title />
        <VarianceList />
      </Box>
    </ChakraProvider>
  );
}

export default Homepage;
