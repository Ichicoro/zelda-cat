/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { readdirSync } from "fs";
import classNames from "classnames";
import { imageSize } from "image-size"
import { Image as RPAImage } from "react-photo-album";
import PhotoGallery from "@/components/PhotoGallery";
import TitleText from "@/components/TitleText";
import { ExifData, ExifImage } from "exif";

export const getImages = (async() => {
  try {
    const images = await Promise.all(readdirSync("./public/photos").map(async (file) => {
      const imagePath = `./public/photos/${file}`
      const dimensions = imageSize(imagePath);
      const exifData = await new Promise((resolve, reject) => {
        try {
          new ExifImage({ image: imagePath }, (error, exifData) => {
            if (error) {
              console.log(error);
              resolve(undefined);
            }
            resolve(exifData);
          })
        } catch (error) {
          resolve(undefined);
        }
      }) as ExifData | undefined;
      return {
        src: `/photos/${file}`,
        width: dimensions.width!,
        height: dimensions.height!,
        nonParsedDate: exifData?.exif?.DateTimeOriginal,
        date: exifData?.exif?.DateTimeOriginal ? new Date(exifData?.exif?.DateTimeOriginal.replace(":", "-").replace(":", "-")) : undefined,
      };
    }))
    return { images }
  } catch (error) {
    console.log(error)
    return { images: [] }
  }
}) as () => Promise<{ images: RPAImage[] }>;

const overlays = ['Image 1',"",""];

export default async function Page() {
  const { images } = await getImages();
  console.log(images)

  return (
    <>
      <TitleText title="photos" topSub="hey! these are my" />
      <div className="flex flex-col">
        <PhotoGallery images={images} />
      </div>
    </>
  );
}
