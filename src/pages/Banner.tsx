import styles from '../styles/pages/Banner.module.css';
import Image from 'next/image';
import bannerImg from "../assets/banner-img.png"
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';


const Banner = () => {
  return (
      <div className={styles.bannerContent}>
        <div className={styles.imageContainer}>
          <Image src={bannerImg} alt="Minha imagem" width={200} height={200} className={styles.bannerImg} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.bannerTitle}>Riany Mello</h1>
          <p className={styles.bannerSubtitle}>Front-end developer</p>
          <div>
            <AiFillGithub className={styles.socialIcon}/>
            <AiFillLinkedin className={styles.socialIcon}/>
          </div>
        </div>
      
    </div>
  );
};

export default Banner;