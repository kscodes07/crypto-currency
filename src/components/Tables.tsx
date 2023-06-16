import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Input,
} from "@chakra-ui/react";
import { Text, Image, Card } from "@chakra-ui/react";

function Tables(each: any) {
  console.log(each);
  return (
    <Table>
      <Tr key={each.id}>
        <Td>
          <Image src={each.logo} borderRadius={"50"} maxW={"30"}></Image>
        </Td>
        <Td>
          <Text>{each.name}</Text>
        </Td>
        <Td>
          <Text color={each.change_1h > 0 ? "green" : "red"}>
            {each.change_1h && each.change_1h.toFixed(2)}
          </Text>
        </Td>
        <Td>
          <Text color={each.change_1d > 0 ? "green" : "red"}>
            {each.change_1d && each.change_1d.toFixed(2)}
          </Text>
        </Td>
        <Td>
          <Text color={each.change_7d > 0 ? "green" : "red"}>
            {each.change_7d && each.change_7d.toFixed(2)}
          </Text>
        </Td>
      </Tr>
    </Table>
  );
}

export default Tables;
