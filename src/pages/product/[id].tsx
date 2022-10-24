import Image from "next/image";
import { useRouter } from "next/router";
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "../../styles/pages/product";

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer>{/* <Image /> */}</ImageContainer>

      <ProductDetails>
        <h1>Camisa X</h1>
        <span>R$ 79.99</span>

        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus
          excepturi autem expedita similique. Ut modi et optio impedit
          laudantium numquam enim ducimus, corrupti cumque distinctio tempore
          quibusdam quisquam voluptates atque.
        </p>

        <button>Comprar Agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
