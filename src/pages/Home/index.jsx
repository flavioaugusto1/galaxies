import { Container } from "./styles";
import { Card } from "../../components/Card";

import IC1101 from "../../assets/ic-1101.png";

export function Home() {
  return (
    <Container>
      <div>
        <h1>As maiores galáxias</h1>
        <p>E curiosidades sobre elas</p>

        <section>
          <Card
            image={IC1101}
            title={"IC 1101"}
            description={
              "A IC 1101 é a maior galáxia do universo. A galáxia é elíptica à lenticular e aparece como coloração amarelo dourado. A galáxia mais brilhante está situada a mais de 1.04 bilhões de anos-luz da Terra. "
            }
          />
        </section>
      </div>
    </Container>
  );
}
