import React from 'react'
import { Link } from 'gatsby'

const NewsDigest = (props) => {
    console.log('props.node', props)
    const { frontmatter, id, internal, fields } = props.node;
    const wordsPerMinute = 500; // Average case.
    let minRead
    let textLength = internal.content.length
        minRead = Math.round(textLength / wordsPerMinute)
    return (
        <React.Fragment>
            <li className="post-list-item" key={id}>
                <Link to={fields.slug}><img className="post-list-img" src={frontmatter.featuredImage} alt={frontmatter.title}/>
                    <div className="post-list-text"><strong>{frontmatter.title}</strong></div>
                    <div className="post-list-text font-kokoro">{frontmatter.categories[0].category}{' | '}{minRead}{' '}min{' '}read{' | '}{frontmatter.date}</div>
                    <div className="post-list-desc">{frontmatter.excerpt}</div>
                </Link>
          </li>
        </React.Fragment>
    )
}


export default NewsDigest