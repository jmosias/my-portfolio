import { createSignal, onMount, onCleanup, type Component } from "solid-js";

const isTouchDevice = () => window.matchMedia("(pointer: coarse)").matches;

const App: Component = () => {
  const [showCursor, setShowCursor] = createSignal(false);
  let dotRef: HTMLDivElement | undefined;

  const handleMouseMove = (e: MouseEvent) => {
    if (!dotRef) return;
    const OFFSET = 6;
    dotRef.style.left = `${e.clientX + OFFSET}px`;
    dotRef.style.top = `${e.clientY + OFFSET}px`;
  };

  const addHoverEffects = () => {
    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("mouseenter", () =>
        dotRef?.classList.add("scale-200"),
      );
      link.addEventListener("mouseleave", () =>
        dotRef?.classList.remove("scale-200"),
      );
    });
  };

  onMount(() => {
    if (isTouchDevice()) return;

    setShowCursor(true);
    document.addEventListener("mousemove", handleMouseMove);
    addHoverEffects();

    onCleanup(() => {
      document.removeEventListener("mousemove", handleMouseMove);
    });
  });

  const containerClass = () =>
    `font-sono bg-surface text-primary flex min-h-screen flex-col items-center justify-center gap-16 p-4 text-center sm:p-8 ${
      showCursor() ? "cursor-none" : ""
    }`;

  return (
    <div class={containerClass()}>
      {showCursor() && (
        <div
          ref={(el) => (dotRef = el)}
          id="cursor-dot"
          class="border-primary pointer-events-none fixed z-[9999] size-3 rounded-full border transition-transform duration-150 will-change-transform"
        />
      )}
      <div class="flex max-w-xl flex-col items-center gap-4 text-center">
        <h1>hello!</h1>
        <p class="blinking-caret text-sm leading-relaxed font-extralight">
          i am currently revamping my portfolio
        </p>
      </div>
      <p class="text-xs font-extralight">
        → check out my{" "}
        <a
          href="https://github.com/jmosias"
          class="hover:text-primary cursor-none underline transition-colors"
          target="_blank"
        >
          GitHub
        </a>{" "}
        in the meantime
      </p>
    </div>
  );
};

export default App;
