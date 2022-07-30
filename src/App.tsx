import React from "react";
import styled, {
  ThemeProvider,
  createGlobalStyle,
  DefaultTheme,
} from "styled-components";
import reset from "styled-reset";
import { ColorSchemeSwitch } from "./components/ColorSchemeSwitch";
import { EmojiGrid } from "./components/EmojiGrid";
import { getRandomEmoji } from "./emojis";

const GlobalStyles = createGlobalStyle`
  ${reset}
  html, body, #root {
    height: 100%;
    margin: 0;
  }
  

  body {
    background-color: ${({ theme }) => theme.background};
    transition: ${({ theme }) => theme.transition};
  }
`;

const Wrapper = styled.div`
  min-height: 100%;
`;

const themeCommon = {
  transition: "0.4s;",
};

const lightTheme: DefaultTheme = {
  ...themeCommon,
  background: "#e1dfe9",
  border: "#1C3041",
};

const theme: DefaultTheme = {
  ...themeCommon,
  background: "#1C3041",
  border: "#e1dfe9",
};

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0%;
`;

const CenteredContent = styled.div`
  margin-top: 50px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const RefreshButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  font-size: 4rem;

  &:focus {
    box-shadow: 0 0 1px ${({ theme }) => theme.border};
  }
`;

function App() {
  const [isDarkMode, setDarkMode] = React.useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  const [emojis, setEmojis] = React.useState(() => getRandomEmoji());

  const { animal, action } = emojis;

  return (
    <ThemeProvider theme={isDarkMode ? theme : lightTheme}>
      <GlobalStyles />
      <Wrapper>
        <Header>
          <ColorSchemeSwitch
            darkMode={isDarkMode}
            onChange={(value: boolean) => setDarkMode(value)}
          />
        </Header>
        <CenteredContent>
          <EmojiGrid animal={animal} action={action} />
          <RefreshButton onClick={() => setEmojis(getRandomEmoji())}>
            🔀
          </RefreshButton>
        </CenteredContent>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
