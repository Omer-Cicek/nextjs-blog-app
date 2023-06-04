import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur minima at aspernatur ipsa rem repudiandae, minus alias fugiat porro sapiente delectus quidem distinctio voluptates repellendus necessitatibus ut a commodi illum animi quibusdam ipsum cumque, sunt explicabo? Fugit assumenda vel eos ex molestiae, dolor, velit alias aut est, sequi modi! Possimus.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/15940872/pexels-photo-15940872/free-photo-of-kitten-standing-atop-wall-under-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>User Name</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/15940872/pexels-photo-15940872/free-photo-of-kitten-standing-atop-wall-under-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, totam veritatis exercitationem nisi tenetur dicta non perspiciatis quasi, quam nesciunt quibusdam at officia asperiores inventore, expedita a! Autem vel voluptate obcaecati ex et eveniet. Eligendi enim doloremque sapiente et obcaecati praesentium impedit reprehenderit libero dicta omnis! Dolorem saepe, dicta libero fuga animi quis molestiae iste praesentium culpa nisi placeat vero! Nulla sunt deserunt sapiente fugit fuga explicabo delectus suscipit aperiam dicta, mollitia beatae recusandae tenetur saepe architecto illo eum aliquid doloremque? Minima doloremque optio repellat fugit ea quasi earum quisquam neque suscipit doloribus similique tempore at vitae velit, recusandae nihil.
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. A iste aliquam dignissimos voluptatem corrupti, repellat ad numquam qui consequuntur quis voluptate ipsa non iure minus, vel nulla. Quas aperiam magni eos velit minus. Consequuntur ipsa, sed in sequi facilis repudiandae harum, velit explicabo sit quas eum saepe aliquam vitae. Vero dolores unde quasi dignissimos, saepe, maxime repellendus dicta dolore harum corporis ipsa nisi qui adipisci expedita itaque praesentium esse quo numquam nobis excepturi quas. Deserunt sit nam ab incidunt expedita debitis nulla, voluptatum, aspernatur quasi cupiditate corrupti ea hic harum, voluptates consequuntur! Officia soluta neque dolorum molestias minima eaque eum.
        </p>
      </div>
    </div>
  )
}

export default BlogPost