import styled from "styled-components";
import { allShops } from "../data";
import ShopCards from "./ShopCards";
import { mobile } from "../responsive";
import { mobile1 } from "../responsive";


const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })};
  ${mobile1({ padding: "0px", flexDirection: "column" })};
`;

function Shope() {
  return (
    <Container>
      {allShops.map((title) => (
        <ShopCards item={title} />
      ))}
    </Container>
  );
}

export default Shope;
