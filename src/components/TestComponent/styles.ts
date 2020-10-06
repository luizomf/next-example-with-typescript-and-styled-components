import styled, { css } from 'styled-components';

export const Container = styled.h1`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
  `}
`;
