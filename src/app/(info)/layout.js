import Navbar from "@/components/Navbar"
import MobileNav from "@/components/MobileNav"

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <MobileNav />
      {children}
    </div>
  )
}
