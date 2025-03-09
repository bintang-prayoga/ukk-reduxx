import React, { memo, useEffect, useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

// Import CSS plugin di sini agar hanya diterapkan di sisi klien
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import "filepond-plugin-file-poster/dist/filepond-plugin-file-poster.css";

function FileUpload(props) {
  const [pluginsLoaded, setPluginsLoaded] = useState(false);

  useEffect(() => {
    // Import plugin di sisi klien
    (async () => {
      const FilePondPluginImageExifOrientation = await import(
        "filepond-plugin-image-exif-orientation"
      );
      const FilePondPluginImagePreview = await import(
        "filepond-plugin-image-preview"
      );
      const FilePondPluginFilePoster = await import(
        "filepond-plugin-file-poster"
      );
      const FilePondPluginFileValidateType = await import(
        "filepond-plugin-file-validate-type"
      );

      // Register plugin di klien
      registerPlugin(
        FilePondPluginImageExifOrientation.default,
        FilePondPluginImagePreview.default,
        FilePondPluginFilePoster.default,
        FilePondPluginFileValidateType.default
      );
      setPluginsLoaded(true); // Hanya render FilePond setelah plugin dimuat
    })();
  }, []);

  return pluginsLoaded ? <FilePond {...props} /> : null; // Tampilkan FilePond hanya jika plugin tersedia
}

export default memo(FileUpload);
