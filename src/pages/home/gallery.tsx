import { CSSProperties, ChangeEvent, FC, MouseEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";

import { Annotation, AnnotationWrapper, Container, Point } from "components";
import { useStateContext } from "hooks";
import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";
import { AnnotationService } from "services";
import { ICONS, REACT_APP_PUBLIC_URL } from "utils/constants";
import { IAnnotation } from "utils/declarations";
import { generateColor, generateUsername } from "utils/helpers";

export const Gallery: FC = () => {
  const [zoom, setZoom] = useState({ x: 0, y: 0, scale: 1, value: "" });
  const [creatingAnnotation, setCreatingAnnotation] = useState<Pick<IAnnotation, "pos" | "color">>({ pos: { x: 0, y: 0 }, color: generateColor() });
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const { file, annotations, uploadAnnotations } = useStateContext();

  const imgRef = useRef<HTMLDivElement | null>(null);

  const imageUrl = useMemo(() => {
    if (file) {
      return URL.createObjectURL(file);
    }
  }, [file]);

  const onUpdate = useCallback(({ x, y, scale }: { x: number; y: number; scale: number }) => {
    const { current: img } = imgRef;

    if (img) {
      const value = make3dTransformValue({ x, y, scale });
      setZoom({ x: x * -1, y: y * -1, scale, value });
    }
  }, []);

  const setPoint = (event: MouseEvent<HTMLDivElement>) => {
    setIsCreating(true);
    const { left, top } = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const heightEl = event.currentTarget.offsetHeight;
    const widthEl = event.currentTarget.offsetWidth;
    const x = event.clientX - left; //x position within the element.
    const y = event.clientY - top; //y position within the element.

    // substrict 16 for centered point. I do than because point has height and width 32px
    setCreatingAnnotation((prevState) => ({ ...prevState, pos: { x: (x - 16) / widthEl, y: (y - 16) / heightEl } }));
  };

  const handleComment = (event: ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const leaveComment = async () => {
    await AnnotationService.upload({
      ...creatingAnnotation,
      id: Math.floor(Math.random() * 10000 + 1),
      author: generateUsername(),
      comment
    });

    setIsCreated(true);
    setIsCreating(false);
    setComment("");
  };

  useEffect(() => {
    if (isCreated) {
      uploadAnnotations();
      setIsCreated(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCreated]);

  useEffect(() => {
    uploadAnnotations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="gallery">
      <Container>
        <div className="gallery-wrapper">
          <div className="gallery-wrapper__image" ref={imgRef} onClick={setPoint}>
            <QuickPinchZoom onUpdate={onUpdate}>
              {!file ? <img src="images/default-image.jpg" style={{ transform: zoom.value }} /> : <img src={imageUrl} style={{ transform: zoom.value }} />}
            </QuickPinchZoom>
            {annotations.length && annotations.map((annotation, index) => <Annotation key={annotation.id} count={index + 1} info={annotation} />)}
            {creatingAnnotation.pos.x && creatingAnnotation.pos.y ? (
              <>
                {isCreating && (
                  <div
                    className="comment"
                    style={
                      {
                        "--left": `${creatingAnnotation.pos.x * 100}%`,
                        "--top": `${creatingAnnotation.pos.y * 100}%`,
                        "--random-color": `${creatingAnnotation.color}`
                      } as CSSProperties
                    }
                    onClick={(event) => event.stopPropagation()}
                  >
                    <Point>{annotations.length + 1}</Point>
                    <AnnotationWrapper>
                      <div className="comment-input">
                        <input type="text" onChange={handleComment} placeholder="Leave a comment" value={comment} />
                        <button type="button" onClick={leaveComment} className="comment-input__button" disabled={!comment}>
                          {ICONS.send}
                        </button>
                      </div>
                    </AnnotationWrapper>
                  </div>
                )}
              </>
            ) : null}
          </div>
        </div>
      </Container>
    </div>
  );
};
