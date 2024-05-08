"use client";

import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

type UploadResult = {
  event: "success";
  info: {
    public_id: string;
  };
};

export default function Home() {
  const [imageId, setImageId] = useState("");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CldUploadButton
        onUpload={(results: UploadResult) => {
          setImageId(results.info.public_id);
        }}
        uploadPreset="fgbufbjh"
      />
      {imageId && (
        <CldImage
          width="600"
          height="400"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </main>
  );
}
