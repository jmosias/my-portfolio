import { Component } from "solid-js";

interface HeadingProps {
  text: string;
  isMainHeading?: boolean;
}

const Heading: Component<HeadingProps> = (props) => {
  const { text, isMainHeading } = props;
  const headingClasses = "font-display text-2xl sm:text-5xl lg:text-7xl";

  if (isMainHeading) {
    return <h1 class={headingClasses}>{text}</h1>;
  }
  return <h2 class={headingClasses}>{text}</h2>;
};

export default Heading;
