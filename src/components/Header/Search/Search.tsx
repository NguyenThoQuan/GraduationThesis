"use client";
import { Flex, Autocomplete } from "@mantine/core";
import style from "./Search.module.scss";
import { IconSearch } from "@tabler/icons-react";
import Image from "next/image";

const Search = () => {
  return (
    <Flex gap="10px" align="center">
      <Image src="/favicon-32x32.png" alt="logo" width={36} height={36} />
      <Autocomplete
        className={style.search}
        w={"100%"}
        variant="filled"
        placeholder="Search"
        leftSection={<IconSearch width={"16px"} height={"16px"} stroke={1.5} />}
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
    </Flex>
  );
};

export default Search;
