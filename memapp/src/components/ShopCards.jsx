import styled from "styled-components";
import { mobile } from "../responsive";
import { mobile1 } from "../responsive";
import { Link } from "react-router-dom";


const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 30vh;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-radius: 25px;
  ${mobile({ height: "50vh" })};
  ${mobile1({ height: "50vh" })};

  &:hover {
    background: lightgrey;
    color: white;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 60%;
  align-items: center;
  object-fit: cover;
  ${mobile({ height: "35vh" })};
  ${mobile1({ height: "50vh" })};
`;

const Info = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  color: black;
  ${mobile({ color: "white", padding: "0px 20px" })};
  ${mobile1({ color: "white", padding: "0px 20px" })};
`;

const Title = styled.h1`
  padding: 20px 0px 0px 10px;
  font-weight: 600;
  font-size: 24px;
  ${mobile({ fontSize: "14px", padding: "0px 10px" })};
  ${mobile1({ fontSize: "14px", padding: "0px 10px" })};
`;

const Area = styled.p`
  padding: 0px 20px;
  font-weight: 500;
  font-size: 14px;
  ${mobile({ fontSize: "12px", padding: "0px 10px" })};
  ${mobile1({ fontSize: "12px", padding: "0px 10px" })};
`;

const Button = styled.button`
    font-family: inherit;
    font-weight: bold;
    font-size: 14px;
    margin: 0px 20px;
    border: 2px solid color: #f1db3f;
    background: transparent;
    color: black;
    border-radius: 25px;
    transition: background 200ms ease-in, 200ms ease-in;

    &:hover{
    background: #f1db3f;
    color: Black;
}
`;

const ShopCards = ({ item }) => {
  return (
    <Container>
      <Link to={`/shops/${item.title}`}>
        <Image src={item.img} />
        <Info>
          <Title> {item.title}</Title>
          <Area> {item.area}</Area>
          <Button>Shop Now</Button>
        </Info>
        </Link>
    </Container>
  );
};

export default ShopCards;
