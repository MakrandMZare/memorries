import styled from "styled-components";
import { product } from "../data";
import { mobile } from "../responsive";
import { mobile1 } from "../responsive";
import Product from "./Product";

const Container = styled.div`
      padding: 10px;
      margin: 3px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      ${mobile({ marginTop: "10px", alignContent: "center" })}
      ${mobile1({ marginTop: "10px", alignContent: "center" })}
`;

const Products = () => {
  return (
    <Container>
      {product.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
