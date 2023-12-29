import Image from "next/image"

export default function HistOfComp() {
  return (
    <Image
      src="/histOfComp.png"
      alt="Hist of Comp"
      width={950}
      height={650}
      layout="responsive"
      style={{ borderRadius: '50px', backgroundColor: 'black'}}
    />
  )
}