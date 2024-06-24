"use client";
import { Autocomplete, Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import style from "./Header.module.scss";
import Link from "next/link";

const links = [
  { link: "/about", label: "Features" },
  { link: "/pricing", label: "Pricing" },
  { link: "/learn", label: "Learn" },
  { link: "/community", label: "Community" },
];

const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={style.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={style.header}>
      <div className={style.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </Group>

        <Group>
          <Autocomplete
            className={style.search}
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
            radius={"xl"}
          />
          <Group ml={50} gap={5} className={style.links} visibleFrom="sm">
            {items}
          </Group>
        </Group>
      </div>
    </header>
  );
};

export default Header;
