"use client";
import React from "react"
import PhotoAlbum, { Image } from "react-photo-album"
import NextJsImage from "./NextJsImage"

type PhotoGalleryProps = {
  images: Image[]
}

const PhotoGallery: React.FunctionComponent<PhotoGalleryProps> = ({images}: PhotoGalleryProps) => {
  return <PhotoAlbum
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
    onClick={(photo) => {
      console.log(photo);
    }}
    targetRowHeight={400}
    // sizes={{ size: "calc(100vw - 240px)" }}
  />
}

export default PhotoGallery