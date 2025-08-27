import { Component, For } from "solid-js";
import Text from "./Text";

interface TagsProps {
  tags: string[];
}

const Tags: Component<TagsProps> = (props) => {
  const { tags } = props;

  return (
    <For each={tags}>
      {(tag) => (
        <div class="border-foreground-transparent rounded-full border px-2 sm:px-4 lg:px-8">
          <Text isLight text={tag} />
        </div>
      )}
    </For>
  );
};

export default Tags;
