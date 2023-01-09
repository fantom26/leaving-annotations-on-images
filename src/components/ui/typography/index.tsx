import { ElementType, FC, HTMLAttributes, ReactNode } from "react";

interface TypographyProps extends HTMLAttributes<HTMLOrSVGElement> {
  tag?: ElementType;
  variant?: "h1" | "paragraph" | "caption";
  weight?: 400 | 500 | 600 | 700;
  color?: "grey" | "white";
  classNames?: string;
  children?: ReactNode;
}

export const Typography: FC<TypographyProps> = (props) => {
  // **Props
  const { tag: Tag = "div", variant = "caption", weight = 400, color = "black", children, classNames: classes = "", ...rest } = props;

  const getClasses = () => {
    let className = classes ? `typography ${classes}` : "typography";

    switch (variant) {
      case "h1": {
        className += " h1";
        break;
      }
      case "paragraph": {
        className += " paragraph";
        break;
      }
      case "caption": {
        className += " caption";
        break;
      }
      default: {
        break;
      }
    }

    switch (color) {
      case "grey": {
        className += " grey";
        break;
      }
      case "white": {
        className += " white";
        break;
      }
      default: {
        break;
      }
    }

    switch (weight) {
      case 400: {
        className += " weight-400";
        break;
      }
      case 500: {
        className += " weight-500";
        break;
      }
      case 600: {
        className += " weight-600";
        break;
      }
      case 700: {
        className += " weight-700";
        break;
      }
      default: {
        break;
      }
    }

    return className;
  };

  return (
    <Tag className={getClasses()} {...rest}>
      {children}
    </Tag>
  );
};
