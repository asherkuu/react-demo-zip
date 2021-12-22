import { Fragment, useState } from "react";
import type { AppProps } from "next/app";

import { themes } from "styles/theme";
import { ThemeProvider } from "styles/styled";
import { GlobalStyles } from "styles/global";
import Header from "components/common/Header";

export type Theme = keyof typeof themes;

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<Theme>("dark");

  const headerProps = {
    theme,
    handleTheme: () => {
      setTheme(theme === "dark" ? "light" : "dark");
    },
  };

  return (
    <Fragment>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        <div>
          <Header {...headerProps} />
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
