"use client";
import { Container, Flex, Input } from "@mantine/core";
import style from "./Search.module.scss";
import { IconSearch } from "@tabler/icons-react";
import Image from "next/image";

const Search = () => {
  return (
    <Container className={style.search}>
      <Flex gap="10px" align="center">
        <Image src="/favicon-32x32.png" alt="logo" width={36} height={36} />
        <Input
          variant="filled"
          placeholder="Tìm kiếm"
          leftSection={<IconSearch size={18} />}
          size={"md"}
          radius={"xl"}
        />
      </Flex>
    </Container>
  );
};

export default Search;
