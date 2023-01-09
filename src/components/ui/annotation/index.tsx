import { CSSProperties, FC, MouseEvent, ReactNode } from "react";

import { useStateContext } from "hooks";
import { ICONS } from "utils/constants";
import { IAnnotation } from "utils/declarations";

import { Point } from "../point";
import { Typography } from "../typography";

export const AnnotationWrapper: FC<{ children: ReactNode }> = ({ children }) => <div className="annotation-wrapper">{children}</div>;

export const Annotation: FC<{ info: IAnnotation; count: number }> = (props) => {
  const { info, count } = props;

  const { deleteAnnotation } = useStateContext();

  const handleDelete = (event: MouseEvent, id: number) => {
    event.stopPropagation();
    deleteAnnotation(id);
  };

  return (
    <div
      className="annotation"
      style={{ "--left": `${(info.pos.x as number) * 100}%`, "--top": `${(info.pos.y as number) * 100}%`, "--random-color": info.color } as CSSProperties}
    >
      <Point>{count}</Point>
      <AnnotationWrapper>
        <div className="annotation-body">
          <div className="annotation-body__avatar">
            {info.author.split(" ")[0][0]}
            {info.author.split(" ")[1][0]}
          </div>
          <div className="annotation-body__info">
            <Typography tag="p" variant="paragraph" weight={700} classNames="annotation-body__author">
              {info.author}
            </Typography>
            <Typography tag="p" variant="paragraph" classNames="annotation-body__text">
              {info.comment}
            </Typography>
          </div>
          <button type="button" className="annotation-body__delete" onClick={(event) => handleDelete(event, info.id)}>
            {ICONS.delete}
          </button>
        </div>
      </AnnotationWrapper>
    </div>
  );
};
