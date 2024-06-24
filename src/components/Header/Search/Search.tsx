"use client";
import { Container, Flex, Group, Autocomplete } from "@mantine/core";
import style from "./Search.module.scss";
import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";

const Search = () => {
  return (
    <Container className={style.search}>
      <Flex gap="10px" align="center">
        <Image src="/favicon-32x32.png" alt="logo" width={36} height={36} />
      </Flex>
    </Container>
  );
};

export default Search;
