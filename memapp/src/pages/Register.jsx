import styled from "styled-components";
import { mobile } from "../responsive";
import { mobile1 } from "../responsive";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Container = styled.div`
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30%;
  align-items: center;
  padding: 20px;
  justify-content: center;
  background-color: lightgrey;
  ${mobile({ width: "80%" })}
  ${mobile1({ width: "100%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  border-radius: 10px;

  &hover: bakcground-color: black;
`;

const Register = () => {
  return (
    
    <Container>
      <Navbar />
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="mobile or username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY.</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
        
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Register;
