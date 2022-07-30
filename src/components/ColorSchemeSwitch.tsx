import React from "react";
import styled from "styled-components";

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.background};
  transition: ${({ theme }) => theme.transition};
  border-radius: 34px;
  border: 1px solid ${({ theme }) => theme.border};

  &:before {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    content: "☀️";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${({ theme }) => theme.background};
    transition: ${({ theme }) => theme.transition};
    border-radius: 50%;
  }

  ${Input}:focus + & {
    box-shadow: 0 0 1px ${({ theme }) => theme.border};
  }

  ${Input}:checked + &:before {
    transform: translateX(26px);
    content: "🌙";
  }
`;

interface ColorSchemeSwitchProps {
  darkMode: boolean;
  onChange: (value: boolean) => void;
}

export const ColorSchemeSwitch = ({
  darkMode,
  onChange,
}: ColorSchemeSwitchProps) => {
  return (
    <Switch>
      <Input
        type="checkbox"
        checked={darkMode}
        onChange={(e) => onChange(e.target.checked)}
      />
      <Slider />
    </Switch>
  );
};
