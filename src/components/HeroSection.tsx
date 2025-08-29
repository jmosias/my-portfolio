import { Component, For } from "solid-js";
import { InfoData, HeroData } from "../types/data";
import heroData from "../data/hero.json";
import infoData from "../data/info.json";
import Heading from "./base/Heading";
import Text from "./base/Text";
import Nav from "./Nav";
import Logo from "./base/Logo";
import Button from "./base/Button";
import { scrollToSection } from "../lib";

const HeroSection: Component = () => {
  const hero = heroData as HeroData;
  const info = infoData as InfoData;
  const { taglines, cta, navigation } = hero;
  const { name, role } = info;

  return (
    <section
      id="hero"
      class="flex h-screen flex-col items-center justify-between p-6"
    >
      <div class="flex flex-col items-center gap-2">
        <Logo />
        <Nav links={navigation} />
      </div>

      <div class="text-center">
        <Heading text={name} />
        <Heading text={role} />
        <For each={taglines}>
          {(tagline) => <Text isLight noLeading text={tagline} />}
        </For>
      </div>

      <div class="pb-20">
        <Button
          onClick={() => scrollToSection("#work")}
          text={cta}
          icon="DownIcon"
        />
      </div>
    </section>
  );
};

export default HeroSection;
