import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query {
    site {
      info: siteMetadata {
        title
        author
        description
        simpleData
        person {
          name
          surname
        }
        complexData {
          age
          name
        }
      }
    }
  }
`

const FetchData = () => {
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      {/* <h2>Name: {data.site.info.person.name}</h2> */}
      <h2>Site title is: {title}</h2>
    </div>
  )
}

export default FetchData
