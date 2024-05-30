/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { readdirSync } from "fs";
import classNames from "classnames";
import { imageSize } from "image-size"
import { Image as RPAImage } from "react-photo-album";
import PhotoGallery from "@/components/PhotoGallery";
import TitleText from "@/components/TitleText";
import { ExifData, ExifImage } from "exif";
import Link from "next/link";

const getImages = (async() => {
  try {
    const images = await Promise.all(readdirSync("./public/photos").filter(file => file.endsWith(".jpeg") || file.endsWith("jpg")).map(async (file) => {
      const imagePath = `./public/photos/${file}`
      const dimensions = imageSize(imagePath);
      const exifData = await new Promise((resolve, reject) => {
        try {
          new ExifImage({ image: imagePath }, (error, exifData) => {
            if (error) {
              console.log("Error while reading image", imagePath);
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
    console.error(error);
    return { images: [] }
  }
}) as () => Promise<{ images: RPAImage[] }>;

export default async function Page() {
  const { images } = await getImages();
  console.log(images)

  return (
    <div>
      <TitleText title="photos" topSub="hey! these are my" className="!mb-4" />
      <div className="flex flex-col">
        <div className="mb-7">
          <span className="italic">wanna go back?</span> <Link href="/" className="text-red-800 hover:text-red-700 ml-1">click here</Link>
        </div>
        <PhotoGallery images={images} />
      </div>
    </div>
  );
}
