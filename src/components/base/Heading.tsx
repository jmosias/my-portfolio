import { Component } from "solid-js";

interface HeadingProps {
  text: string;
  isLight?: boolean;
}

const Heading: Component<HeadingProps> = (props) => {
  const { text, isLight } = props;

  return (
    <h2
      class={`font-display text-2xl sm:text-5xl lg:text-7xl ${isLight ? "text-foreground-transparent" : ""}`}
    >
      {text}
    </h2>
  );
};

export default Heading;
