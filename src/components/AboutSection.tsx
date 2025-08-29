import { Component, For } from "solid-js";
import { InfoData } from "../types/data";
import infoData from "../data/info.json";
import Heading from "./base/Heading";
import Text from "./base/Text";
import Button from "./base/Button";

const AboutSection: Component = () => {
  const info = infoData as InfoData;
  const { name, role, email, socials, resume, images, about } = info;

  return (
    <section id="about_contact" class="flex flex-col items-center">
      <Heading text="About" />
      <div class="flex w-full flex-col gap-4 p-4 sm:flex-row sm:gap-8 sm:p-8 lg:max-w-4xl lg:gap-12 lg:p-12">
        <div class="flex gap-4 sm:flex-col">
          {/* Images */}
          <div class="flex flex-2 flex-col gap-1 sm:flex-initial">
            <div class="border-foreground overflow-hidden rounded-lg rounded-tl-full border">
              <img
                src={images[0].url}
                alt={images[0].alt}
                class="h-auto w-full object-cover"
                loading="lazy"
              />
            </div>
            <div class="flex gap-1">
              <div class="border-foreground l flex-1 overflow-hidden rounded-md rounded-bl-2xl border sm:rounded-bl-4xl">
                <img
                  src={images[1].url}
                  alt={images[1].alt}
                  class="h-auto w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div class="border-foreground flex-1 overflow-hidden rounded-md rounded-br-2xl border sm:rounded-br-4xl">
                <img
                  src={images[2].url}
                  alt={images[2].alt}
                  class="h-auto w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          {/* Contact */}
          <div class="flex flex-3 flex-col justify-center gap-1 text-center sm:flex-1 sm:justify-start sm:gap-2">
            <div class="py-2 sm:py-4">
              <Text noLeading text={name} />
              <Text isLight noLeading text={role} />
            </div>
            <Button text={email} icon="CopyIcon" copyText={email} />
            <Button
              text={resume.cta}
              icon={resume.icon}
              externalLink={resume.url}
            />
            <div class="flex justify-center gap-1 sm:gap-2">
              <For each={socials}>
                {(social) => (
                  <Button
                    text={social.name[0]}
                    isIconOnly
                    icon={social.icon}
                    externalLink={social.url}
                  />
                )}
              </For>
            </div>
          </div>
        </div>

        {/* Yapping */}
        <div class="flex flex-col gap-4 sm:gap-8 lg:gap-12">
          <For each={about}>{(paragraph) => <Text text={paragraph} />}</For>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
