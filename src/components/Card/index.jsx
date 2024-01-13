import { Container } from "./styles";

export function Card({ image, title, description }) {
  return (
    <Container>
      <img src={image} alt="imagem de uma galáxia" />
      <div className="description">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </Container>
  );
}
