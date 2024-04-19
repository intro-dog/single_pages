import logoImg from "@/assets/logo.png"
import Image from "next/image"
import Link from "next/link"

import MainHeaderBackground from "./main-header-background"
import styles from "./main-header.module.css"
import Navlink from "./navlink"

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
            <li>
              <Navlink href="/meals">Browse Meals</Navlink>
            </li>
            <li>
              <Navlink href="/community">Foodies Community</Navlink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
