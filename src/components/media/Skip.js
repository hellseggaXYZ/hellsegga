import Image from "next/image"

export default function Skip() {
  return (
    <Image
      src="/skip.png"
      alt="Hist of Comp"
      width={950}
      height={650}
      style={{ borderRadius: '50px', backgroundColor: '#FAFCFF'}}
    />
  )
}