"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Text, Image, Card } from "@chakra-ui/react";
import { CircularProgress } from "@chakra-ui/react";
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
import { Search2Icon } from "@chakra-ui/icons";

function VarianceList() {
  const [datas, setDatas] = useState<any>();
  const [search, setSearch] = useState<any>();

  const getDatas = async () => {
    const details = {
      method: "get",
      url: "https://api.llama.fi/protocols?limit=10",
    };

    try {
      const response = await axios.request(details);
      //   console.log(response.data);
      setDatas(response.data.slice(0, 20));
      console.log(datas);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDatas();
    // console.log(datas);
  }, []);

  return (
    <Box minW={"60%"} alignItems={"center"}>
      {datas ? (
        <>
          <Card>
            <Input
              type="text"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            ></Input>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th></Th>
                    <Th>Name</Th>

                    <Th>1h</Th>
                    <Th>1d</Th>
                    <Th>1w</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {datas.map((each: any) => {
                    if (each.name.includes(search)) {
                      return (
                        <Tr key={each.id}>
                          <Td>
                            <Image
                              src={each.logo}
                              borderRadius={"50"}
                              maxW={"30"}
                            ></Image>
                          </Td>
                          <Td>
                            <Text>{each.name}</Text>
                          </Td>
                          <Td>
                            <Text color={each.change_1h > 0 ? "green" : "red"}>
                              {each.change_1h.toFixed(2)}
                            </Text>
                          </Td>
                          <Td>
                            <Text color={each.change_1d > 0 ? "green" : "red"}>
                              {each.change_1d.toFixed(2)}
                            </Text>
                          </Td>
                          <Td>
                            <Text color={each.change_7d > 0 ? "green" : "red"}>
                              {each.change_7d.toFixed(2)}
                            </Text>
                          </Td>
                        </Tr>
                      );
                    }
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </Card>
        </>
      ) : (
        <CircularProgress isIndeterminate color="green.300" />
      )}
    </Box>
  );
}

export default VarianceList;
