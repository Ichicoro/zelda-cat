"use client";
import React, { useState } from "react"
import PhotoAlbum, { Image } from "react-photo-album"
import NextJsImage from "./NextJsImage"
import classNames from "classnames";
import NextImage from "next/image";

type PhotoGalleryProps = {
  images: Image[]
}

const PhotoGallery: React.FunctionComponent<PhotoGalleryProps> = ({images}: PhotoGalleryProps) => {
  const [openPhoto, setOpenPhoto] = useState<Image | null>(null)

  return <div>
    <div className={classNames("fixed z-10 w-full h-full max-w-screen max-h-screen top-0 left-0", {
      "hidden": !openPhoto
    })}>
      <div
        className="flex items-center justify-center h-screen opacity-70 bg-black"
      />
      {openPhoto && <div
        className="z-30 absolute inset-0 flex items-center justify-center overflow-hidden"
        onClick={() => setOpenPhoto(null)}
      >
        <div className="relative w-full h-full" style={{ aspectRatio: openPhoto.width / openPhoto.height }}>
          <NextImage src={openPhoto.src} alt="photo" className={classNames("w-full h-full object-contain")} width={openPhoto.width} height={openPhoto.height} />
        </div>
      </div>}
    </div>
    <PhotoAlbum
      layout="rows"
      photos={images}
      renderPhoto={NextJsImage}
      componentsProps={{
        imageProps: {
          className: "border border-[1.1rem] border-orange-100 cursor-pointer",
        },
      }}
      breakpoints={[100, 900, 1280]}
      // defaultContainerWidth={1200}
      onClick={(photo): void => {
        console.log("phptp", photo);
        setOpenPhoto(photo.photo);
      }}
      targetRowHeight={400}
    // sizes={{ size: "calc(100vw - 240px)" }}
    />
  </div>
}

export default PhotoGallery