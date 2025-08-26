import { Component } from "solid-js";
import Heading from "./base/Heading";
import Text from "./base/Text";
import Nav from "./Nav";
import Logo from "./base/Logo";
import Button from "./base/Button";

const links = [
  { text: "Work", url: "#work" },
  { text: "About", url: "#about" },
  { text: "Contact", url: "#about" },
];

const HeroSection: Component = () => {
  return (
    <div class="text flex h-screen flex-col items-center justify-between p-6">
      <div class="flex flex-col items-center gap-2">
        <Logo />
        <Nav links={links} />
      </div>

      <div class="text-center">
        <Heading text="John Mark Osias" />
        <Heading text="Full-Stack JS Developer" />
        <Text isLight text="Building user-focused web apps" />
        <Text isLight text="with modern technologies" />
      </div>

      <div class="pb-20">
        <Button text="View selected works" />
      </div>
    </div>
  );
};

export default HeroSection;
