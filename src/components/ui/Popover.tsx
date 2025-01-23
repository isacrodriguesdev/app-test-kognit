import React, { useState } from "react";
import styled from "styled-components";
import { Post } from "../../types/Post";

interface StateProps {
  posts: Post[];
}

type Props = StateProps;

export const Popover: React.FC<Props> = ({ posts }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <PopoverWrapper>
      <PopoverButton onClick={togglePopover}>
        Notifications ({posts.length})
      </PopoverButton>
      <PopoverContent show={isOpen}>
        <PopoverList>
          {posts.map((post) => (
            <PopoverItem key={post.id}>
              <PopoverTitle>{post.title}</PopoverTitle>
              <PopoverBody>{post.body}</PopoverBody>
            </PopoverItem>
          ))}
        </PopoverList>
      </PopoverContent>
    </PopoverWrapper>
  );
};

const PopoverWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const PopoverList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 600px;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const PopoverItem = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  cursor: pointer;
  padding: 12px;
  border-bottom: 1px solid #f1f1f1;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f7f7f7;
  }
`;

const PopoverTitle = styled.h3`
  margin: 0;
  font-size: 14px;
  color: #333;
  font-weight: 600;
`;

const PopoverBody = styled.p`
  margin: 5px 0 0;
  font-size: 12px;
  color: #666;
  line-height: 1.5;
`;

const PopoverContent = styled.div<{ show: boolean }>`
  position: absolute;
  top: 100%;
  transform: translate(-50%, 10px);
  background-color: white;
  padding: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  width: 320px;
  max-height: 600px;
  z-index: 10;
  display: ${({ show }) => (show ? "block" : "none")};
  overflow: hidden;
`;

const PopoverButton = styled.button`
  padding: 10px 18px;
  background-color: #007aff;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;

  &:hover {
    background-color: #005bbb;
  }

  transition: background-color 0.3s ease;
`;
