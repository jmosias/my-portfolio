import { Component, For } from "solid-js";
import { Works } from "../types/data";
import worksData from "../data/works.json";
import Heading from "./base/Heading";
import Tags from "./base/Tags";
import Text from "./base/Text";
import Button from "./base/Button";
import WorkGallery from "./WorkGallery";

const WorkSection: Component = () => {
  const works = worksData as Works;

  return (
    <section id="work" class="flex flex-col gap-8 p-6 sm:gap-12 lg:gap-24">
      <For each={works}>
        {(work, index) => (
          <div
            class={`flex flex-col gap-2 sm:gap-4 lg:gap-6 ${index() % 2 == 0 ? "items-end text-end" : "items-start text-start"}`}
          >
            <div
              class={`flex w-full flex-col sm:flex-row lg:gap-8 ${index() % 2 == 0 ? "sm:items-start sm:justify-between" : "sm:flex-row-reverse sm:items-end sm:justify-between"}`}
            >
              <Heading isLight text={work.id} />
              <Heading text={work.title} />
            </div>
            <div class="flex flex-wrap justify-end gap-1 lg:gap-2">
              <Tags tags={work.technologies} />
            </div>
            <div class="lg:max-w-1/2">
              <Text isLight text={work.description} />
            </div>
            <Button
              onClick={() => {}}
              isPrimary
              text="Read Case Study"
              icon="PopModalIcon"
            />
            <div class="lg:max-w-1/2">
              <WorkGallery images={work.imageUrls} alts={work.imageAlts} />
            </div>
          </div>
        )}
      </For>
    </section>
  );
};

export default WorkSection;
