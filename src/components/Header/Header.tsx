"use client";
import Search from "./Search/Search";
import Menu from "./Menu/Menu";
import Utilities from "./Utilities/Utilities";
import style from "./Header.module.scss";
import { Container, Flex, Paper } from "@mantine/core";

const Header = () => {
  return (
    <header className={style.header}>
      <Paper shadow="sm">
        <Container p={"10px 25px"} fluid>
          <Flex w={"100%"} justify={"space-between"} align={"center"}>
            <Search />
            <Menu />
            <Utilities />
          </Flex>
        </Container>
      </Paper>
    </header>
  );
};

export default Header;
