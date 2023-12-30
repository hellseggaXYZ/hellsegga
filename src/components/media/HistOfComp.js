import Image from "next/image"

export default function HistOfComp() {
  return (
    <Image
      src="/histOfComp.png"
      alt="Hist of Comp"
      priority
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