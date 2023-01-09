export interface IAnnotation {
  id: number;
  author: string;
  comment: string;
  pos: {
    x: number | null;
    y: number | null;
  };
  color: string;
}
