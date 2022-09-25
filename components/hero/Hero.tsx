import Image from "next/image";
import styles from "./hero.module.scss";
Image;
const Hero = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.image}>
          <Image
            src={"/images/site/salim.jpeg"}
            alt={"A real nigga"}
            width={300}
            height={300}
          ></Image>
        </div>
        <h1>Hi, I am Salim</h1>
        <p>I blog about frontend stuff and languages</p>
      </section>
    </>
  );
};

export default Hero;
