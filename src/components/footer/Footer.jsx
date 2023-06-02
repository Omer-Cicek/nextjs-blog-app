import React from 'react'
import style from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={style.container}>
        <div>&#169;2023 OmerBlog. All rights reserved.</div>
        <div className={style.social}>
            <Image src="/1.png" width={15} height={15} className={style.icon} alt='OmerBlog facebook'/>
            <Image src="/2.png" width={15} height={15} className={style.icon} alt='OmerBlog instagram'/>
            <Image src="/3.png" width={15} height={15} className={style.icon} alt='OmerBlog twitter'/>
            <Image src="/4.png" width={15} height={15} className={style.icon} alt='OmerBlog youtube'/>
        </div>
    </div>
  )
}

export default Footer