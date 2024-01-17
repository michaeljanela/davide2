"use client";
import Image from "next/image";
import styles from "./Carousel.module.scss";
import { useState, useEffect } from "react";

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const totalImages = 8;
      setCurrentImage((prevImage) => (prevImage % totalImages) + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.carousel}>
      <div className={styles.image}>
        <Image src={`/carousel/${currentImage}.png`} fill alt="" />
        <div className={styles.text}>
          <h1>
            Bienvenue au Restaurant <br /> Janela
          </h1>
        </div>
      </div>
    </div>
  );
}
