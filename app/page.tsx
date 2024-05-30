/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import classNames from "classnames";
import TwemojiSVG from "@/components/TwemojiSVG";
import TitleText from "@/components/TitleText";

export default function Home() {
  return (
    <div /* className="w-full max-w-4xl mx-auto" */>
      <TitleText title="Zelda" topSub="hi! my name is" className="mb-3" />
      <div className="font-bold text-xl">
        <TwemojiSVG><span>I'm a developer, gamer and photographer from Italy ✨</span></TwemojiSVG>
      </div>
    </div>
  );
}
