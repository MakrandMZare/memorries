import { mobile } from "../responsive";
import { mobile1 } from "../responsive";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    flex; 1;
    margin: 5px;
    min-width: 20vw;
    height: 28vh;
    background-color: white;
    justify-content: space-between;
    align-items: center;
    position: relative;
    border-radius: 25px;
    transition: all 0.5s ease;
    cursor: pointer;
    ${mobile({ width: "100%" })}
    ${mobile1({ width: "100%" })}

    &:hover {
      background: lightgrey;
      color: lightgrey;
    }
`;

const Image = styled.img`
  width: 100%;
  height: 65%;
  object-fit: cover;
  `;

const Info = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 35%;
  color: Black;
  transition: all 0.5s ease;
`;

const Title = styled.h1`
  padding: 10px 20px 0px 15px;
  font-size: 18px;
  font-weight: 600;
  ${mobile({ padding: "0px 20px" })}
  ${mobile1({ padding: "0px 20px" })}
`;

const Desc = styled.div`
  font-weight: 500;
  font-size: 14px;
  padding: 0 15px;
  ${mobile({ padding: "0px 20px" })}
  ${mobile1({ padding: "0px 20px" })}
`;

const Button = styled.button`
  font-weight: bold;
  font-size: 12px;
  background: transparent;
  color: black;
  margin: -250px 0 -250px 285px;
  border-radius: 25px;
  transition: background 200ms ease-in, color 200ms ease-in;

  &:hover {
    background: black;
    color: white;
  }
  ${mobile({ margin: "-250px 0 -150px 250px" })}
  ${mobile1({ margin: "-250px 0 -150px 250px" })}
`;

const Cost = styled.div`
  font-size: 14px;
  font-weight: 600;
  padding: 0 15px;
  ${mobile({ padding: "0px 20px" })}
  ${mobile1({ padding: "0px 20px" })}
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Link to={`/product/${item.cat}`}>
      <Image src={item.img} />
      <Info>
        <Title>{item.name}</Title>
        <Button onClick="/SingleProduct">Shop Now</Button>
        <Desc>{item.desc}</Desc>
        <Cost>{item.cost}</Cost>
      </Info>
      </Link>
    </Container>
  );
};

export default Product;
