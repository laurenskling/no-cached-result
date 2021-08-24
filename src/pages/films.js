import React from 'react';
import { graphql, Link } from 'gatsby';

export const pageQuery = graphql`
  query MyQuery {
    swapi {
      allFilms {
        edges {
          node {
            title
            id
          }
        }
      }
    }
  }
`;

const Films = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>Films</h1>
      <ul>
        {data.swapi.allFilms.edges.map(({ node }) => (
          <Link key={node.id} to={node.id}>{node.title}</Link>
        ))}
      </ul>
    </div>
  )
}

export default Films;
