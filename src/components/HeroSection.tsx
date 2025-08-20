import { Component } from "solid-js";

const HeroSection: Component = () => {
  return (
    <div class="text flex h-screen flex-col items-center justify-between p-6">
      <div class="flex flex-col items-center gap-2">
        <h6 class="text-primary text-2xl">
          <a href="/" target="_self">
            O
          </a>
        </h6>
        <nav>
          <ul class="font-dis flex gap-4 font-extralight">
            <li class="hover:text-primary transition-colors">
              <a href="#work" target="_self">
                Work
              </a>
            </li>
            <li class="hover:text-primary transition-colors">
              <a href="#about" target="_self">
                About
              </a>
            </li>
            <li class="hover:text-primary transition-colors">
              <a href="#contact" target="_self">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="text-center">
        <h2 class="text-7xl">John Mark Osias</h2>
        <h3 class="text-7xl">
          Full<span class="text-primary">-</span>Stack JS Developer
        </h3>
        <p class="font-extralight">
          Building user-focused web apps
          <br />
          with modern technologies
        </p>
      </div>

      <div class="pb-20">
        <button class="border-primary-transparent hover:bg-primary-transparent cursor-pointer rounded-lg border px-20 py-2 font-extralight transition-all">
          View selected works
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
