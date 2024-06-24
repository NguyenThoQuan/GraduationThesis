"use client";
import Search from "./Search/Search";
import Menu from "./Menu/Menu";
import style from "./Header.module.scss";
import { Container, Flex } from "@mantine/core";

const Header = () => {
  return (
    <header className={style.header}>
      <Container p={"10px 10px"} fluid>
        <Flex w={"100%"}>
          <Search />
          <Menu />
        </Flex>
      </Container>
    </header>
  );
};

export default Header;
