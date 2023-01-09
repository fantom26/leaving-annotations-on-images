import { IAnnotation } from "utils/declarations";

import { $api } from "./axios.service";

export class AnnotationService {
  static getAnnotation() {
    return $api.get<IAnnotation[]>("/annotations");
  }

  static upload(body: IAnnotation) {
    return $api.post<IAnnotation>("/annotations", body);
  }

  static delete(id: number) {
    return $api.delete(`/annotations/${id}`);
  }

  static deleteAll(ids: string) {
    return $api.delete(`/annotations/${ids}`);
  }
}
