import { Container } from "./styles";
import { Card } from "../../components/Card";

export function Home() {
  return (
    <Container>
      <h1>As maiores galáxias</h1>
      <p>E curiosidades sobre elas</p>

      <section>
        <Card />
      </section>
    </Container>
  );
}
