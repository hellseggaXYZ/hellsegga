import Image from "next/image"

export default function Igloo() {
  return (
    <Image
      src="/igloo.png"
      alt="Hist of Comp"
      width={950}
      height={650}
      layout="responsive"
      style={{ borderRadius: '50px', backgroundColor: '#E4E9ED'}}
    />
  )
}