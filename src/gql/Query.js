import { gql } from "@apollo/client";

export const courses = gql`
  query {
    allcourses{
      title
      topic
      description
      id
    }
  }
`;