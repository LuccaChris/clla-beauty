interface ServiceCardProps {
  nome: string;
  preco: number;
  duracao: number;
  imagem: string;
}

export default function ServiceCard({
  nome,
  preco,
  duracao,
  imagem
}: ServiceCardProps) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        borderRadius: "8px",
        width: "220px",
        textAlign: "center"
      }}
    >
      <img
        src={imagem}
        alt={nome}
        style={{ width: "100%", borderRadius: "8px" }}
      />

      <h3>{nome}</h3>
      <p>R$ {preco}</p>
      <p>Duração: {duracao} min</p>

      <button
        style={{
          marginTop: "10px",
          padding: "10px",
          width: "100%",
          background: "#ffb6c1",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Ver detalhes
      </button>
    </div>
  );
}
