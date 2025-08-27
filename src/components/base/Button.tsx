import { Component } from "solid-js";
import Text from "./Text";

interface ButtonProps {
  text: string;
  isPrimary?: boolean;
  onClick: () => void;
}

const Button: Component<ButtonProps> = (props) => {
  const { text, isPrimary, onClick } = props;

  return (
    <button
      class={
        `border-primary-transparent hover:bg-primary-transparent cursor-pointer rounded-md border px-8 py-2 font-extralight transition-all sm:px-12 lg:rounded-lg lg:px-16` +
        (isPrimary ? " bg-primary-transparent hover:border-primary" : "")
      }
      onclick={onClick}
    >
      <Text isLight text={text}></Text>
    </button>
  );
};

export default Button;
