import { Component, createSignal, onCleanup } from "solid-js";
import Text from "./Text";
import Icon from "./Icon";
import { IconName } from "../../types/data";

interface ButtonProps {
  text?: string;
  icon?: IconName;
  isPrimary?: boolean;
  isIconOnly?: boolean;
  externalLink?: string;
  copyText?: string;
  onClick?: () => void;
}

const Button: Component<ButtonProps> = (props) => {
  const [isCopied, setIsCopied] = createSignal(false);
  let timeoutId: number | undefined;

  onCleanup(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  });

  const handleCopyToClipboard = async (textToCopy: string) => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        setIsCopied(false);
        timeoutId = undefined;
      }, 2000);

      props.onClick?.();
    } catch (error) {
      console.error("Failed to copy text: ", error);
      props.onClick?.();
    }
  };

  const handleButtonClick = () => {
    if (props.externalLink) {
      window.open(props.externalLink, "_blank");
      props.onClick?.();
    } else if (props.copyText) {
      handleCopyToClipboard(props.copyText);
    } else {
      props.onClick?.();
    }
  };

  const buttonClasses = () => {
    const baseClasses =
      "border-primary-transparent hover:bg-primary-transparent flex cursor-pointer items-center justify-center gap-1 rounded-md border font-extralight transition-all sm:gap-2 lg:rounded-lg";
    const primaryClasses = props.isPrimary
      ? " bg-primary-transparent hover:border-primary"
      : "";
    const sizeClasses = props.isIconOnly
      ? " p-2 sm:p-3"
      : " px-8 py-1 sm:px-12 sm:py-2 lg:px-16";
    return baseClasses + primaryClasses + sizeClasses;
  };

  return (
    <button
      class={buttonClasses()}
      onclick={handleButtonClick}
      disabled={props.copyText && isCopied()}
    >
      {!props.isIconOnly && (
        <Text
          isLight
          noLeading
          text={
            props.copyText && isCopied()
              ? props.copyText.includes("@")
                ? "Email copied!"
                : "Copied!"
              : props.text
          }
        />
      )}
      <div class="size-3 sm:size-4 lg:size-5">
        <Icon name={isCopied() ? "CheckIcon" : props.icon} />
      </div>
    </button>
  );
};

export default Button;
