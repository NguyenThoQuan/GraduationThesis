import { useState } from "react";
import { FloatingIndicator, UnstyledButton } from "@mantine/core";
import style from "./Menu.module.scss";

const data = ["Home", "Video", "Group", "Game"];

const Menu = () => {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [controlsRefs, setControlsRefs] = useState<
    Record<string, HTMLButtonElement | null>
  >({});
  const [active, setActive] = useState(0);

  const setControlRef = (index: number) => (node: HTMLButtonElement) => {
    controlsRefs[index] = node;
    setControlsRefs(controlsRefs);
  };

  const controls = data.map((item, index) => (
    <UnstyledButton
      key={item}
      className={style.control}
      ref={setControlRef(index)}
      onClick={() => setActive(index)}
      mod={{ active: active === index }}
    >
      <span className={style.controlLabel}>{item}</span>
    </UnstyledButton>
  ));

  return (
    <div className={style.root} ref={setRootRef}>
      {controls}

      <FloatingIndicator
        target={controlsRefs[active]}
        parent={rootRef}
        className={style.indicator}
      />
    </div>
  );
};

export default Menu;
