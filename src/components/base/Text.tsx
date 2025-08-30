import { Component } from "solid-js";

interface TextProps {
  text?: string;
  isLight?: boolean;
  noLeading?: boolean;
  isBold?: boolean;
}

const Text: Component<TextProps> = (props) => {
  return (
    <p
      class={`text-xs sm:text-base lg:text-lg ${
        props.isBold ? "font-bold" : ""
      } ${props.isLight ? "font-extralight" : ""} ${
        props.noLeading
          ? "leading-normal"
          : "leading-5 sm:leading-7 lg:leading-9"
      }`}
    >
      {props.text}
    </p>
  );
};

export default Text;
