import styled from "styled-components";
import Image from "next/image";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 16px;

  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 0px 0px 4px 4px;

  width: 100%; /* Ajuste para ocupar toda a largura disponível */

  img {
    width: 100%; /* Faz a imagem ocupar toda a largura do card */
    height: 300px;
    object-fit: cover; /* Ajusta a imagem sem distorção */
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start; /*  Alinha título e preço à esquerda */

    > h3 {
      font-weight: 300;
      font-size: 16px;
      line-height: 150%;
      color: var(--text--dark-2);
      margin-bottom: 4px;
    }

    > div {
      width: 100%;
      height: 1px;
      margin: 8px 0;
      background: var(--shapes);
    }

    > p {
      font-weight: 600;
      font-size: 14px;
      line-height: 150%;
      color: var(--shapes--dark);
    }
  }
`;

export function ProductCard(props: ProductCardProps) {
  function formatValue(valueInCents: number) {
    const formattedValue = valueInCents / 100;
    return formattedValue.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    });
  }

  return (
    <Card>
      <img src={props.image} alt={props.title} />
      <div>
        <h3>{props.title}</h3>
        <div></div>
        <p>{formatValue(props.price)}</p>
      </div>
    </Card>
  );
}

