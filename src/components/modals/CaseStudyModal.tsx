import { Component, For } from "solid-js";
import Modal from "./Modal";
import Heading from "../base/Heading";
import { WorkData } from "../../types/data";
import Text from "../base/Text";
import Tags from "../base/Tags";

interface CaseStudyModalProps {
  open: boolean;
  onClose: () => void;
  data: WorkData;
}

const CaseStudyModal: Component<CaseStudyModalProps> = (props) => {
  return (
    <Modal open={props.open} onClose={props.onClose}>
      <div class="flex flex-col items-center gap-4 overflow-hidden text-center sm:gap-8 lg:gap-12">
        <Heading text="Case Study" />
        <div class="flex flex-col items-center gap-2 sm:gap-4">
          <Text isBold noLeading text={props.data.title} />
          <div class="max-w-4/5 px-2 sm:px-4 lg:max-w-3/5">
            <Text isLight noLeading text={props.data.description} />
          </div>
          <div class="flex flex-wrap justify-end gap-1 lg:gap-2">
            <Tags tags={props.data.technologies} />
          </div>
        </div>
        <div class="border-foreground-transparent w-4/5 border-b lg:w-3/5"></div>
        <div class="flex w-full max-w-4/5 flex-col gap-4 text-start sm:gap-8 md:max-w-2/3 lg:max-w-3/5 lg:gap-12">
          <For each={props.data.caseStudy}>
            {(section) => (
              <div>
                <Text isBold text={section.heading} />
                <For each={section.content}>
                  {(paragraph) => (
                    <Text
                      isLight
                      text={
                        `${section.content.length > 1 ? "• " : ""}` + paragraph
                      }
                    />
                  )}
                </For>
              </div>
            )}
          </For>
        </div>
      </div>
    </Modal>
  );
};

export default CaseStudyModal;
