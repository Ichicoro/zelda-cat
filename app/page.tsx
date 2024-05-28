/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import classNames from "classnames";
import TwemojiSVG from "@/components/TwemojiSVG";

export default function Home() {
  return (
    <main className={"flex flex-col justify-start min-h-screen p-10 text-red-950 bg-orange-200 font-vc-honey  gap-3"}>
      <div className="flex flex-row items-center lg:w-auto">
        <div className={classNames("font-black text-red-900 text-3xl")}>
          <span>&nbsp;Hi! I'm</span>
          <h1>
            <span className="text-8xl md:text-9xl">Zelda</span>
          </h1>
        </div>
      </div>
      <div className="font-bold text-xl">
        <TwemojiSVG><span>I'm a developer, gamer and photographer from Italy ✨</span></TwemojiSVG>
      </div>
    </main>
  );
}
