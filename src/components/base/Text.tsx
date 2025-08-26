import { Component } from "solid-js";

interface TextProps {
  text: string;
  isLight?: boolean;
}

const Text: Component<TextProps> = (props) => {
  const { text, isLight } = props;

  return (
    <p
      class={`text-xs sm:text-base lg:text-lg ${isLight ? "font-extralight" : ""}`}
    >
      {text}
    </p>
  );
};

export default Text;
