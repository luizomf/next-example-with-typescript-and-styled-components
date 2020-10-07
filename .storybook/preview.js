import { ThemeProvider } from 'styled-components';
import {theme} from '../src/styles/theme';
import {GlobalStyles} from '../src/styles/global-styles';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const withThemeProvider=(Story,context)=>{
  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
      <GlobalStyles />
    </ThemeProvider>
  )
}
export const decorators = [withThemeProvider];
