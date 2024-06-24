"use client";
import { Flex, Autocomplete, Box, em } from "@mantine/core";
import style from "./Search.module.scss";
import { IconSearch } from "@tabler/icons-react";
import Image from "next/image";
import { useMediaQuery } from "@mantine/hooks";

const Search = () => {
  const isResponsive = useMediaQuery(`(max-width: ${em(1000)})`);

  return (
    <Flex gap="10px" align="center">
      <Image src="/favicon-32x32.png" alt="logo" width={36} height={36} />
      {!isResponsive ? (
        <Autocomplete
          w={"300px"}
          variant="filled"
          placeholder="Search"
          leftSection={
            <IconSearch width={"16px"} height={"16px"} stroke={1.5} />
          }
          data={[
            "React",
            "Angular",
            "Vue",
            "Next.js",
            "Riot.js",
            "Svelte",
            "Blitz.js",
          ]}
          visibleFrom="xs"
          radius={"md"}
        />
      ) : (
        <Box
          display={"flex"}
          p={"7px"}
          bg={"var(--clr-main)"}
          style={{ borderRadius: "5px" }}
        >
          <IconSearch color="#fff" />
        </Box>
      )}
    </Flex>
  );
};

export default Search;
