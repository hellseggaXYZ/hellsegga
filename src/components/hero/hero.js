import styles from './hero.module.css'
// import localFont from 'next/font/local'
// const yuan = localFont({
//   src: '../../fonts/Yuan-Regular.woff2',
//   display: 'swap',
// })

export default function Hero() {
  return (
    <div className={`${styles.title} ${yuan.className}`}>
      <div>
        a creative
      </div>
      <div>
        technologist
      </div>
      <div>
        studio
      </div>
    </div>
  )
}
