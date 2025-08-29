import { Component } from "solid-js";
import Text from "./Text";
import Icon from "./Icon";
import { IconName } from "../../types/data";

interface ButtonProps {
  text: string;
  icon?: IconName;
  isPrimary?: boolean;
  isIconOnly?: boolean;
  externalLink?: string;
  copyText?: string;
  onClick?: () => void;
}

const Button: Component<ButtonProps> = (props) => {
  const { text, isPrimary, onClick, icon, isIconOnly, externalLink, copyText } =
    props;

  const handleExternalLinkClick = () => {
    if (externalLink) {
      window.open(externalLink, "_blank");
      onClick && onClick();
    }
  };

  const handleCopyToClipboard = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      onClick && onClick();
    });
  };

  const handleButtonClick = () => {
    if (externalLink) {
      handleExternalLinkClick();
    }
    if (copyText) {
      handleCopyToClipboard(copyText);
    }
    if (!externalLink && !copyText) {
      onClick && onClick();
    }
  };

  return (
    <button
      class={
        `border-primary-transparent hover:bg-primary-transparent flex cursor-pointer items-center justify-center gap-1 rounded-md border font-extralight transition-all sm:gap-2 lg:rounded-lg` +
        (isPrimary ? " bg-primary-transparent hover:border-primary" : "") +
        (isIconOnly ? " p-2 sm:p-3" : " px-8 py-1 sm:px-12 sm:py-2 lg:px-16")
      }
      onclick={handleButtonClick}
    >
      {isIconOnly ? null : <Text isLight noLeading text={text} />}
      {icon && (
        <div class="size-3 sm:size-4 lg:size-5">
          <Icon name={icon} />
        </div>
      )}
    </button>
  );
};

export default Button;
