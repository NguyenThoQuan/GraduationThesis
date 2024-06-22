import { Grid } from "@mantine/core";
import style from "./Header.module.scss";
import Search from "./Search/Search";

const Header = () => {
  return (
    <Grid p="15px 0px">
      <Search />
    </Grid>
  );
};

export default Header;
