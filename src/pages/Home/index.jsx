import { Container } from "./styles";
import { Card } from "../../components/Card";

import IC1101 from "../../assets/ic-1101.png";
import PhoenixCluster from "../../assets/phoenix-cluster.png";
import NGC262 from "../../assets/ngc-262.png";
import NGC4889 from "../../assets/ngc-4889.png";
import NGC4874 from "../../assets/ngc-4874.png";
import A2261BCG from "../../assets/a2261-bcg.png";

export function Home() {
  return (
    <Container>
      <div>
        <header>
          <h1>As maiores galáxias</h1>
          <h2>E curiosidades sobre elas</h2>
        </header>

        <section>
          <Card
            image={IC1101}
            title={"IC 1101"}
            description={
              "A IC 1101 é a maior galáxia do universo. A galáxia é elíptica à lenticular e aparece como coloração amarelo dourado. A galáxia mais brilhante está situada a mais de 1.04 bilhões de anos-luz da Terra. "
            }
          />

          <Card
            image={PhoenixCluster}
            title={"Phoenix Cluster"}
            description={
              "Phoenix Cluster é um dos grupos de galáxia mais sólidos no universo. Ela tem localização em torno de 5.7 bilhões de anos-luz da Terra. A galáxia elíptica é composta de matéria intra-grupo média e escura."
            }
          />

          <Card
            image={NGC262}
            title={"NGC 262"}
            description={
              "A NGC 262 é localizada a 202 milhões de anos-luz da Terra, que é uma das maiores galáxias espirais conhecidas. O diâmetro da galáxia é de aproximadamente 1.3 milhões de anos-luz. "
            }
          />

          <Card
            image={NGC4889}
            title={"NGC 4889"}
            description={
              "A NGC 4889 é também famosa como “Coma B”, uma galáxia super gigante elíptica situada aproximadamente a 308 milhões de anos-luz da Terra. Ela também foi descoberta pelo astrônomo britânico Frederick William Herschel I em 1785."
            }
          />

          <Card
            image={NGC4874}
            title={"NGC 4874"}
            description={
              "A NGC 4874 também conhecida como “Coma A” foi descoberta em 1785 pelo astrônomo britânico Frederick William Herschel I. E está a 350 milhões de anos-luz longe da Terra. É uma galáxia lisa, em forma de bola, cercada por um círculo estelar."
            }
          />

          <Card
            image={A2261BCG}
            title={"A2261-BCG"}
            description={
              "A A2261-BCG situou-se a aproximadamente 3 bilhões de anos-luz da Terra. É elíptica em formato e foi encontrada pelo Telescópio Espacial Hubble. A A2261-BCG tem um diâmetro e um milhão de anos-luz."
            }
          />
        </section>
      </div>
    </Container>
  );
}
