import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
        <Link href='/blog/testId'>
            <div className={styles.imageContainer}>
                <Image 
                    src="https://images.pexels.com/photos/16769489/pexels-photo-16769489/free-photo-of-woman-relaxation-water-summer.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                    alt=""
                    width={400}
                    height={250}
                    className={styles.image}
                />
            </div>
            <div className={styles.content}>
                <h1 className={styles.title}>Test</h1>
                <div className={styles.desc}>Desc</div>
            </div>
        </Link>
        <Link href='/testId'>
            <div className={styles.imageContainer}>
                <Image 
                    src="https://images.pexels.com/photos/16769489/pexels-photo-16769489/free-photo-of-woman-relaxation-water-summer.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                    alt=""
                    width={400}
                    height={250}
                    className={styles.image}
                />
            </div>
            <div className={styles.content}>
                <h1 className={styles.title}>Test</h1>
                <div className={styles.desc}>Desc</div>
            </div>
        </Link>
    </div>
  )
}

export default Blog