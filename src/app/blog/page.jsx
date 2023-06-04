import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
        next: {revalidate: 10}
    });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
   
    return res.json();
  }

const Blog = async() => {

    const data =await getData()

  return (
    <div className={styles.mainContainer}>
        {
            data.map(item =>(
                <Link href='/blog/testId' key={item.id}>
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
                        <h1 className={styles.title}>{item.title}</h1>
                        <div className={styles.desc}>{item.body}</div>
                    </div>
                </Link>
            ))
        }
        
    </div>
  )
}

export default Blog