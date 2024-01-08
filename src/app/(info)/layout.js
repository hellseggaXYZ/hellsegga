import Navbar from "@/components/Navbar"
import MobileNav from "@/components/MobileNav"

export default function Layout({ children }) {
  return (
    <div style={{position: 'relative'}}>
      <Navbar />
      <MobileNav />
      {children}
    </div>
  )
}
