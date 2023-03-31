import React from "react";
import styled from "styled-components";
import Logo from "../components/logo/logo192.png";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined, Search } from "@material-ui/icons";
import { mobile } from "../responsive";
import { mobile1 } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  background-color: black;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
  ${mobile1({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding-bottom: 10px;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
  ${mobile1({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 2px solid white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  bakcground-color: lightgray;
  ${mobile({ marginLeft: "20px" })}
  ${mobile1({ marginLeft: "20px" })}
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "30px" })}
  ${mobile1({ width: "30px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
  align-items: center;
  ${mobile({ justifyContent: "center" })}
  ${mobile1({ justifyContent: "center" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: white;
  ${mobile({ flex: 2, justifyContent: "center" })}
  ${mobile1({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: white;
  ${mobile({ fontsize: "12px", marginLeft:"10px" })}
  ${mobile1({ fontsize: "12px", marginLeft:"10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ fontsize: 14 }} />
          </SearchContainer>
        </Left>
        <Link to="/">
        <Center>
          <img src={Logo} className="App-logo" alt="Logo" width={45} />
        </Center>
        </Link>
        <Right>
          <Link to="/register"><MenuItem>Register</MenuItem></Link>
          <Link to="/login"><MenuItem>Sign In</MenuItem></Link>
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={4} color="white">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
