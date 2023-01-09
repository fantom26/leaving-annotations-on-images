import { ChangeEvent, FC, useRef } from "react";

import { useStateContext } from "hooks";

import { Button } from "../button";

export const FilePicker: FC = () => {
  const filePicker = useRef<HTMLInputElement | null>(null);

  const { uploadFile, deleteAnnotations } = useStateContext();

  const handlePick = () => {
    if (filePicker.current) {
      filePicker.current.click();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files?.length) {
      uploadFile(e.target.files);
      deleteAnnotations();
    }
  };

  return (
    <>
      <input ref={filePicker} onChange={handleChange} className="visually-hidden" type="file" accept="image/*,.png,.jpg,.gif,.web" />
      <Button onClick={handlePick}>Upload image</Button>
    </>
  );
};
