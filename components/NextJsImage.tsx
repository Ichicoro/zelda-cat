"use client";
import classNames from "classnames";
import Image from "next/image";
import type { RenderPhotoProps } from "react-photo-album";

export default function NextJsImage({
  photo,
  imageProps: { alt, title, sizes, className: imageClassName, onClick },
  wrapperStyle,
  className,
}: RenderPhotoProps & { className?: string} ) {
  return (
    <div
      style={{ ...wrapperStyle, position: "relative" }}
      className={classNames(className)}
      onClick={onClick}
    >
      <Image
        fill
        src={photo}
        placeholder={"blurDataURL" in photo ? "blur" : undefined}
        {...{ alt, title, sizes, className: imageClassName }}
      />
      <div className="absolute opacity-0 hover:opacity-100 w-full h-full top-0 right-0 left-0">
        <div className="absolute w-full h-[50px] bottom-0 right-0 left-0 bg-orange-100 flex justify-center items-center">
          {title ?? photo.src.toLowerCase()}
        </div>
      </div>
    </div>
  );
}