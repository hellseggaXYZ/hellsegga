import Image from "next/image"

export default function Igloo() {
  return (
    <Image
      src="/igloo.png"
      alt="Hist of Comp"
      width={950}
      height={650}
      style={{
        width: '100%',
        height: 'auto',
        maxWidth: '950px',
      }}
    />
  )
}