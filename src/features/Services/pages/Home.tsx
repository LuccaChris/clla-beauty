import ServiceCard from "../Components/ServiceCard";

interface Servico {
  id: number;
  nome: string;
  preco: number;
  duracao: number;
  imagem: string;
}

export default function Home() {
  const servicos: Servico[] = [
    {
      id: 1,
      nome: "Corte Feminino",
      preco: 50,
      duracao: 45,
      imagem: "https://via.placeholder.com/200x150"
    },
    {
      id: 2,
      nome: "Manicure",
      preco: 30,
      duracao: 35,
      imagem: "https://via.placeholder.com/200x150"
    },
    {
      id: 3,
      nome: "Alongamento de Cílios",
      preco: 120,
      duracao: 90,
      imagem: "https://via.placeholder.com/200x150"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Serviços disponíveis</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "20px"
        }}
      >
        {servicos.map((servico) => (
          <ServiceCard
            key={servico.id}
            nome={servico.nome}
            preco={servico.preco}
            duracao={servico.duracao}
            imagem={servico.imagem}
          />
        ))}
      </div>
    </div>
  );
}
