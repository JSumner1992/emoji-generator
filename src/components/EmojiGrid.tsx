import React from "react";
import styled from "styled-components";
import { Action } from "../emojis";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px;
`;
const Spacer = styled.div`
  height: 4rem;
`;

const Emoji = styled.span`
  font-size: 4rem;
`;

interface EmojiGridProps {
  animal: string;
  action: Action;
}

export const EmojiGrid = ({ animal, action }: EmojiGridProps) => {
  return (
    <Grid>
      <Spacer />
      {action.position === "top" ? <Emoji>{action.emoji}</Emoji> : <Spacer />}
      <Spacer />
      <Spacer />
      <Emoji>{animal}</Emoji>
      {action.position === "right" ? <Emoji>{action.emoji}</Emoji> : <Spacer />}
    </Grid>
  );
};
