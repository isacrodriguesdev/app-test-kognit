import styled from "styled-components";
import { useEffect, useState } from "react";
import { Popover } from "../components/ui/Popover";
import { Post } from "../types/Post";
import { useAuth } from "../context/AuthContext";

export function Header() {
  const { logout } = useAuth();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <Container>
      <Title>Kognit</Title>
      <HorizontalArea>
        <Popover posts={posts} />
        <LogoutButton onClick={logout}>Logout</LogoutButton>
      </HorizontalArea>
    </Container>
  );
}

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  padding: 0 20px;
  background-color: #282c34;
`;

const HorizontalArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h1`
  color: white;
`;

// logout button in red
const LogoutButton = styled.button`
  background-color: #E5484D;
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
    background-color: #d86b6b;
  }
`;
