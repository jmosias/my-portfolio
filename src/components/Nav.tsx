import { Component, For } from "solid-js";

interface NavProps {
  links: { text: string; url: string }[];
}

export const Nav: Component<NavProps> = (props) => {
  const { links } = props;

  return (
    <nav>
      <ul class="flex gap-4 font-extralight">
        <For each={links}>
          {(link) => (
            <li class="hover:text-primary text-xs transition-colors lg:text-base">
              <a href={link.url}>{link.text}</a>
            </li>
          )}
        </For>
      </ul>
    </nav>
  );
};

export default Nav;
