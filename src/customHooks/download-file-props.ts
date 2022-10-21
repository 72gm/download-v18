import { AxiosResponse } from "axios";

export interface DownloadFileProps {
  readonly apiDefinition: () => Promise<AxiosResponse<Blob>>;
  readonly getFileName: () => string;
}
