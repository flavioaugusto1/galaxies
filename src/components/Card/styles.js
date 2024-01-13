import styled from "styled-components";

export const Container = styled.div`
  max-width: 36.6rem;
  background-color: #202024;
  border: 2px solid #323238;

  img {
    width: 100%;
  }

  .description {
    padding: 3.2rem;

    >h1 {
      margin-bottom: 1.4rem;
      font-size: 3.5rem;
      color: #E1E1E6
    }

    p {
      font-size: 2rem;
      color: #C4C4CC;
    }
  }
`;