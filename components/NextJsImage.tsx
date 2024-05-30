"use client";
import Image from "next/image";
import type { RenderPhotoProps } from "react-photo-album";

export default function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className: imageClassName, onClick },
  wrapperStyle,
  className,
}: RenderPhotoProps & { className?: string} ) {
  return (
    <div style={{ ...wrapperStyle, position: "relative" }} className={className}>
      <Image
        fill
        src={photo}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        {...{ alt, title, sizes, className: imageClassName, onClick }}
      />
    </div>
  );
}