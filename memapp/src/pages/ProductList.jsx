import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { mobile1 } from "../responsive";

const Container = styled.div`
`;

const Wrapper = styled.div`
  margin: 5px;
  justify-content: space-between;
  ${mobile({ alignContent: "Center" })}
  ${mobile1({ alignContent: "Center" })}
`;

const Title = styled.h1`
  margin: 0px 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 0px 20px;
  ${mobile({ margin: "10px", display: "flex", flexDirection: "column" })}
  ${mobile1({ margin: "10px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
  ${mobile1({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
  ${mobile1({ margin: "10px 0px" })}
`;

const Option = styled.option`
  font-size: 14px;
  font-weight: 400;
`;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>Cakes</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Product By</FilterText>
            <Select>
              <Option disabled selected>
                Rate
              </Option>
              <Option>₹.250.00</Option>
              <Option>₹.500.00</Option>
              <Option>₹.750.00</Option>
              <Option>₹.1000.00</Option>
              <Option>₹.2000.00+</Option>
              <Option>Coustomised</Option>
            </Select>
          </Filter>
        </FilterContainer>
      </Wrapper>
      <Products />
      <Footer />
    </Container>
  );
};

export default ProductList;
