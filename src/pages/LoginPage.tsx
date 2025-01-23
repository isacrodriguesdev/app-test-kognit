import styled from "styled-components";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export function LoginPage() {
  const { login } = useAuth();

  const [email, setEmail] = useState("isacrodriguesdev@protonmail.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");

  async function handleLogin() {
    const result = await login(email, password);

    if (result.error) {
      setError(result.error);
    }
  }

  return (
    <Container>
      <Logo>Kognit</Logo>
      <Form>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Login</Button>
      </Form>
      <Footer>
        <SmallText>{error}</SmallText>
       </Footer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f7f7f7;
`;

const Logo = styled.h1`
  color: #333;
  font-family: "SF Pro Display", "Helvetica Neue", sans-serif;
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 40px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  gap: 20px;
`;

const Input = styled.input`
  padding: 15px;
  font-size: 16px;
  background: #fff;
  border: 1px solid #d1d3d8;
  border-radius: 8px;
  color: #333;
  box-sizing: border-box;
  transition: border 0.3s ease-in-out;

  &:focus {
    border: 1px solid #007aff;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 15px;
  font-size: 16px;
  background-color: #007aff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005bbb;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 320px;
  margin-top: 20px;
`;

const SmallText = styled.span`
  color: #ff0037;
  font-size: 14px;
`;
