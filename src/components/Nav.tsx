import { Component, For } from "solid-js";
import { scrollToSection } from "../lib";

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
            <li class="hover:text-primary cursor-pointer text-xs transition-colors lg:text-base">
              <p onClick={() => scrollToSection(link.url)}>{link.text}</p>
            </li>
          )}
        </For>
      </ul>
    </nav>
  );
};

export default Nav;
