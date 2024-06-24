import { Flex, Box, Avatar } from "@mantine/core";
import style from "./Utilities.module.scss";
import { IconMessage, IconSettings, IconBell } from "@tabler/icons-react";

const Utilities = () => {
  return (
    <div className={style.utilities}>
      <Flex gap={"10px"} align={"center"}>
        <Box
          bg={"var(--clr-main)"}
          display={"flex"}
          p={"7px"}
          style={{ borderRadius: "5px", cursor: "pointer" }}
        >
          <IconMessage color="#fff" />
        </Box>
        <Box
          bg={"var(--clr-main)"}
          display={"flex"}
          p={"7px"}
          style={{ borderRadius: "5px", cursor: "pointer" }}
        >
          <IconSettings color="#fff" />
        </Box>
        <Box
          bg={"var(--clr-main)"}
          display={"flex"}
          p={"7px"}
          style={{ borderRadius: "5px", cursor: "pointer" }}
        >
          <IconBell color="#fff" />
        </Box>
        <Avatar src="/avatar.jpg" radius={"sm"} />
      </Flex>
    </div>
  );
};

export default Utilities;
