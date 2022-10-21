import React, { useState } from "react";
import { useDownloadFile } from "../../customHooks/useDownloadFile";
import { downloadQuery } from "./download-query";

export const DownloadComponent = () => {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const onErrorDownloadFile = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const getFileName = () => {
    return "some-file.pdf";
  };

  const { ref, url, download, name } = useDownloadFile({
    apiDefinition: downloadQuery,
    getFileName,
  });

  return (
    <div className="card-body p-5">
      <h5>REACT 18 download on demand</h5>
      <a href={url} download={name} className="hidden" ref={ref} />
      <div className="btn btn-primary" onClick={download}>
        {" "}
        Download File
      </div>
    </div>
  );
};
