'use client'

import Link from 'next/link'
import React from 'react'
import style from './navbar.module.css'

const Navbar = () => {

    const links=[
        {
            id: 1,
            title: 'Home',
            url: '/'
        },
        {
            id: 2,
            title: 'Portfolio',
            url: '/portfolio'
        },
        {
            id: 3,
            title: 'Blog',
            url: '/blog'
        },
        {
            id: 4,
            title: 'About',
            url: '/about'
        },
        {
            id: 5,
            title: 'Contact',
            url: '/contact'
        },
        {
            id: 6,
            title: 'Dashboard',
            url: '/dashboard'
        },
    ]


  return (
    <div className={style.container}>
        <Link href='/' className={style.logo}>OmerBlog</Link>
        <div className={style.links}>
            {
                links.map(link => (
                        <Link key={link.id} href={link.url} className={style.link}>{link.title}</Link>
                    )
                )
            }
            <button onClick={() => console.log('logged out')} className={style.logout}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar