import "./PresentationStyle.css";
import { TypeAnimation } from "react-type-animation";

function Presentation() {
  return (
    <div className="Presentation">
      <div className="header-box">
        <div className="profile-name">Rhaissa Marques</div>
        <div className="data-analyst">Analista de Dados</div>

        <div className="profile-description">
          Analista de dados com experiência em Excel, Python, SQL, Power BI e
          mais. Transformando dados em resultados e ajudando empresas a tomarem
          decisões informadas.
        </div>
      </div>
      <div className="linkedin">
        <a
          href="https://www.linkedin.com/in/rhaissa-marques"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
      <div className="github">
        <a
          href="https://app.powerbi.com/home?experience=power-bi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link PowerBI
        </a>
      </div>

      <h2>
        <div className="animation">
          <TypeAnimation
            sequence={[
              "Acelerar a tomada de decisões",
              1000,
              "Capacidade de controlar custos",
              1000,
              "Diferencial em um mercado competitivo",
              1000,
              "Entender melhor as necessidades e desejos dos clientes",
              1000,
              "Melhoria da eficiência operacional",
              1000,
              "Identificar gargalos",
              1000,
              "Inovação",
              1000,
              "Melhoria da experiência do cliente",
              1000,
              "Tomada de decisões baseada em evidências",
              1000,
              "Otimização do marketing e das vendas",
              1000,
              "Monitoramento do desempenho das campanhas em tempo real",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
      </h2>
    </div>
  );
}

export default Presentation;
