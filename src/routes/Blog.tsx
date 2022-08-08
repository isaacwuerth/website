import React from 'react'
import { Helmet } from 'react-helmet'
import './Blog.sass'
import { Link } from 'react-router-dom'
import lorem from '../util/lorem'

type Listitempost = {
  id: number
  date: Date
  title: string
  author: string
  tags: string[]
  description: string
  categories: string[]
  coverimage: string
}

function Blog() {
  const blogposts: Listitempost[] = [
    {
      id: 1,
      title: 'C# Basics',
      author: 'Isaac Würth',
      categories: ['csharp', '.net', 'basics'],
      date: new Date(),
      tags: ['Csharp', 'basics'],
      description: lorem(120),
      coverimage: 'https://dummyimage.com/150x150/eee/aaa',
    },
    {
      id: 2,
      title: 'Java Basics',
      author: 'Isaac Würth',
      categories: ['Java', 'basics'],
      date: new Date(),
      tags: ['Java', 'basics'],
      description: lorem(20),
      coverimage: 'https://dummyimage.com/150x150/eee/aaa',
    },
    {
      id: 3,
      title: 'JavaScript Basics',
      author: 'Isaac Würth',
      categories: ['JavaScript', 'basics'],
      date: new Date(),
      tags: ['basics'],
      description: lorem(120),
      coverimage: 'https://dummyimage.com/150x150/eee/aaa',
    },
  ]

  return (
    <div className='page'>
      <Helmet>
        <title>Blog | Isaac Würth</title>
      </Helmet>
      <div className='page-header'>
        <h2 className='page-heading'>Blog</h2>
      </div>
      <ul>
        {blogposts.map((value) => (
          <li>
            <div className='post-converimage'>
              <img src={value.coverimage} alt='This is something else than a diagram' />
            </div>
            <div className='post-content'>
              <div>
                <div className='post-tags'>{value.tags.join(', ')}</div>
                <h3 className='post-title'>
                  <Link to={`${value.id}`}>{value.title}</Link>
                </h3>
                <div className='post-description'>{value.description}</div>
              </div>
              <div className='post-footer'><span className='post-date'>{value.date.toDateString()}</span> by <span
                className='post-author'>{value.author}</span></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Blog
