import { FC, HTMLAttributes, ReactNode } from "react";

interface ButtonProps extends HTMLAttributes<HTMLElement> {
  isLoading?: boolean;
  className?: string;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
  // **Props
  const { isLoading, className: classes = "", children, ...rest } = props;

  const defineClasses = () => {
    let classNames = `btn ${classes}`;

    if (isLoading) classNames += " disabled";

    return classNames;
  };

  return (
    <button disabled={isLoading} className={defineClasses()} {...rest}>
      <span>{children}</span>
    </button>
  );
};
