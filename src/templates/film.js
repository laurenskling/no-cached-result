import React from 'react';
import { graphql } from 'gatsby';


export const pageQuery = graphql`
  query FilmById($id: ID!) {
    swapi {
      film(id: $id) {
        id
        title
      }
    }
  }
`;

const Film = ({ data }) => (
  <div>
    <h1>{data.swapi.film.title}</h1>
  </div>
);

export default Film;
