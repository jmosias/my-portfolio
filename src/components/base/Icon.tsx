import { Component } from "solid-js";
import { IconName } from "../../types/data";
import {
  GithubIcon,
  LinkedinIcon,
  DownloadIcon,
  DownIcon,
  CloseIcon,
  CopyIcon,
  PopModalIcon,
} from "../../icons";

interface IconProps {
  name: IconName;
}

const Icon: Component<IconProps> = (props) => {
  switch (props.name) {
    case "GithubIcon":
      return <GithubIcon />;
    case "LinkedinIcon":
      return <LinkedinIcon />;
    case "DownloadIcon":
      return <DownloadIcon />;
    case "DownIcon":
      return <DownIcon />;
    case "CloseIcon":
      return <CloseIcon />;
    case "CopyIcon":
      return <CopyIcon />;
    case "PopModalIcon":
      return <PopModalIcon />;
    default:
      return null;
  }
};

export default Icon;
