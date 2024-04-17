"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

import burgerImg from "@/public/burger.jpg"
import curryImg from "@/public/curry.jpg"
import dumplingsImg from "@/public/dumplings.jpg"
import macncheeseImg from "@/public/macncheese.jpg"
import pizzaImg from "@/public/pizza.jpg"
import schnitzelImg from "@/public/schnitzel.jpg"
import tomatoSaladImg from "@/public/tomato-salad.jpg"
import styles from "./image-sledeshow.module.css"

const images = [
  { image: burgerImg, alt: "A delicious, juicy burger" },
  { image: curryImg, alt: "A delicious, spicy curry" },
  { image: dumplingsImg, alt: "Steamed dumplings" },
  { image: macncheeseImg, alt: "Mac and cheese" },
  { image: pizzaImg, alt: "A delicious pizza" },
  { image: schnitzelImg, alt: "A delicious schnitzel" },
  { image: tomatoSaladImg, alt: "A delicious tomato salad" },
]

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      )
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? styles.active : ""}
          alt={image.alt}
        />
      ))}
    </div>
  )
}
