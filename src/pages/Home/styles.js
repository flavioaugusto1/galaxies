import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  justify-content: center;

  margin-top: 7.3rem;
  margin-bottom: 11.4rem;
  padding: 1.2rem;

  h1 {
    color: #02799d;
    font-size: 5.8rem;
  }

  h2 {
    color: #e1e1e6;
    font-size: 3.2rem;
    margin-bottom: 6.3rem;
  }

  section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 4.4rem;
    column-gap: 6rem;
  }

  @media (max-width: 1024px) {
    section {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
