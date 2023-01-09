/* eslint-disable @typescript-eslint/no-empty-function */
import { FC, ReactNode, createContext, useState } from "react";

import { AnnotationService } from "services";
import { IAnnotation } from "utils/declarations";
import { generateColor } from "utils/helpers";

type StateContextType = {
  file: File | null;
  annotations: IAnnotation[];
  uploadFile: (files: FileList | null) => void;
  uploadAnnotations: () => void;
  deleteAnnotation: (id: number) => void;
  deleteAnnotations: () => void;
};

const initialState: StateContextType = {
  file: null,
  annotations: [],
  uploadFile: () => {},
  uploadAnnotations: () => {},
  deleteAnnotation: () => {},
  deleteAnnotations: () => {}
};

export const StateContext = createContext(initialState);

export const StateProvider: FC<{ children: ReactNode }> = (props) => {
  // **Props
  const { children } = props;

  // **Local state
  const [file, setFile] = useState<File | null>(null);
  const [annotations, setAnnotations] = useState<IAnnotation[]>([]);

  const uploadFile = (files: FileList | null) => {
    if (files) {
      setFile(files[0]);
    }
  };

  const uploadAnnotations = async () => {
    const response = await AnnotationService.getAnnotation();
    setAnnotations(
      response.data.map((annotation) => {
        if (!annotation.color) {
          return { ...annotation, color: generateColor() };
        }
        return { ...annotation };
      })
    );
  };

  const deleteAnnotations = () => {
    Promise.all(
      annotations.map(async (annotation) => {
        await AnnotationService.delete(annotation.id);
      })
    ).catch((err) => {
      console.log(err.message);
    });

    setAnnotations([]);
  };

  const deleteAnnotation = async (id: number) => {
    await AnnotationService.delete(id);
    setAnnotations((prevState) => prevState.filter((annotation) => annotation.id !== id));
  };

  return (
    <StateContext.Provider
      value={{
        file,
        annotations,
        uploadFile,
        uploadAnnotations,
        deleteAnnotation,
        deleteAnnotations
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
