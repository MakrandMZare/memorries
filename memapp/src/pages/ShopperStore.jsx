import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Shope from "../components/Shope";
import { allShops } from "../data";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const Wrapper = styled.div`
  display: grid;
  gap: 10px;
  justify-content: center;
`;

const ShopperStore = () => {
  return (
    <Container>
      <Navbar />
      <Title>All Stores</Title>
      <Wrapper>
      {allShops.map((title) => (
        < Shope item={title} />
      ))}
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default ShopperStore;
