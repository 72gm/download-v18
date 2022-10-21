import { useRef, useState } from "react";
import { DownloadedFileInfo } from "./download-file-info";
import { DownloadFileProps } from "./download-file-props";

export const useDownloadFile = ({
  apiDefinition,
  getFileName,
}: DownloadFileProps): DownloadedFileInfo => {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const [url, setFileUrl] = useState<string>();
  const [name, setFileName] = useState<string>();

  const download = async () => {
    try {
      const { data } = await apiDefinition();
      const url = URL.createObjectURL(new Blob([data]));
      setFileUrl(url);
      setFileName(getFileName());
      ref.current?.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.log(error);
    }
  };

  return { download, ref, url, name };
};
