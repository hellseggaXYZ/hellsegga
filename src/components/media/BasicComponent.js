import Image from "next/image"

export default function BasicComponent() {
  return (
    <Image
      src="/basicComponent.png"
      alt="Hist of Comp"
      width={950}
      height={650}
      layout="responsive"
      style={{ borderRadius: '50px' }}
    />
  )
}