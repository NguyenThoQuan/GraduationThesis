import Link from "next/link";
import { Button } from "@mantine/core";

function Home() {
  return (
    <Button component={Link} href="/hello">
      Next link button
    </Button>
  );
}

export default Home;
