/* eslint-disable react/no-unescaped-entities */
import TwemojiSVG from "@/components/TwemojiSVG";
import TitleText from "@/components/TitleText";
import Link from "next/link";

export default function Home() {
  return (
    <div /* className="w-full max-w-4xl mx-auto" */>
      <TitleText title="Zelda" topSub="hi! my name is" />
      <div className="font-bold text-xl">
        <TwemojiSVG><div>I'm a developer, gamer and photographer from Italy ✨</div></TwemojiSVG>
        <div>
          <span className="italic">wanna see my photos?</span> <Link href="/photos" className="text-red-800 hover:text-red-700 ml-1">click here</Link>
        </div>
      </div>
    </div>
  );
}
