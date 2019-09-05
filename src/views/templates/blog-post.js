import React from "react"
import PropTypes from "prop-types"

function BlogPost(props) {
  const { postTitle } = props.data.contentfulBlog
  console.log("[props.data.allContentfulBlog]", props.data.contentfulBlog)
  return <div>{postTitle}</div>
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      id
      postDate
      postTitle
      slug
      postContent {
        json
      }
    }
  }
`
