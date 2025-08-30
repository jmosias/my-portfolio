import { Component } from "solid-js";
import Text from "./base/Text";
import { scrollToSection } from "../lib";

const FooterSection: Component = () => {
  return (
    <footer class="flex flex-col gap-4 p-4 text-center sm:gap-8 sm:p-8 lg:gap-12 lg:p-12">
      <div>
        <div class="flex justify-center gap-1 text-center sm:gap-2">
          <Text noLeading text="Currently available for new opportunities" />
          <span class="text-primary-transparent">
            <Text noLeading text="•" />
          </span>
          <Text noLeading text="Open to remote work" />
        </div>
        <Text noLeading text="Based in City of Malolos, Philippines" />
      </div>

      <div>
        <Text noLeading isLight text="© 2025 John Mark Osias" />
        <p
          class="hover:text-primary text-foreground-transparent inline-block cursor-pointer underline transition-colors"
          onClick={() => scrollToSection("#hero")}
        >
          <Text isLight noLeading text="top"></Text>
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
