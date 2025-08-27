import { Component, For } from "solid-js";
import { HeroData } from "../types/data";
import heroData from "../data/hero.json";
import Heading from "./base/Heading";
import Text from "./base/Text";
import Nav from "./Nav";
import Logo from "./base/Logo";
import Button from "./base/Button";
import { scrollToSection } from "../lib";

const HeroSection: Component = () => {
  const content = heroData as HeroData;
  const { name, role, taglines, cta, navigation } = content;

  return (
    <section class="flex h-screen flex-col items-center justify-between p-6">
      <div class="flex flex-col items-center gap-2">
        <Logo />
        <Nav links={navigation} />
      </div>

      <div class="text-center">
        <Heading text={name} />
        <Heading text={role} />
        <For each={taglines}>
          {(tagline) => <Text isLight text={tagline} />}
        </For>
      </div>

      <div class="pb-20">
        <Button onClick={() => scrollToSection("#work")} text={cta} />
      </div>
    </section>
  );
};

export default HeroSection;
