import { FC, ReactNode } from "react";

export const Point: FC<{ children: ReactNode }> = ({ children }) => <div className="point">{children}</div>;
