import React from "react"
import classNames from "classnames";

type TitleTextProps = {
  topSub: React.ReactNode
  title: React.ReactNode
  bottomSub?: React.ReactNode
  className?: string
}

const TitleText: React.FunctionComponent<TitleTextProps> = ({
  topSub,
  title,
  bottomSub,
  className
}: TitleTextProps) => {
  return <div className={classNames("flex flex-row items-center w-full lg:w-auto mb-1", className)}>
    <div className={classNames("font-black text-red-900 text-2xl sm:text-3xl")}>
      <span className="text-red-950">&nbsp;{topSub}</span>
      <h1>
        <span className="text-7xl text-[5rem] sm:text-8xl">{title}</span>
      </h1>
    </div>
    {bottomSub && <div className="font-bold text-lg sm:text-xl text-red-900 mt-3">{bottomSub}</div>}
  </div>;
}

export default TitleText