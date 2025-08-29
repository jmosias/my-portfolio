import { Component } from "solid-js";

interface TextProps {
  text: string;
  isLight?: boolean;
  noLeading?: boolean;
}

const Text: Component<TextProps> = (props) => {
  const { text, isLight, noLeading } = props;

  return (
    <p
      class={`text-xs sm:text-base lg:text-lg ${isLight ? "font-extralight" : ""} ${noLeading ? "leading-normal" : "leading-5 sm:leading-7 lg:leading-9"}`}
    >
      {text}
    </p>
  );
};

export default Text;
