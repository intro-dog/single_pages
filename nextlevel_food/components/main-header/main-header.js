import logoImg from "@/public/logo.png"
import Image from "next/image"
import Link from "next/link"
import MainHeaderBackground from "./main-header-background"
import styles from "./main-header.module.css"

export default function MainHeader() {
  return (
    <div>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logoImg} alt="logo" priority />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <Link href="/meals">Browse Meals</Link>
            <Link href="/community">Foodies Community</Link>
          </ul>
        </nav>
      </header>
    </div>
  )
}
