import { css } from 'styled-components';

/*
  Define an object 'mediaQueries' that contains functions for generating media queries.
  These functions will be used to apply different styles based on the screen size.
*/
export const mediaQueries = {
  small: (...args) => css`
    // Applies styles when the screen width is at most the 'small' breakpoint defined in the theme.
    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
      ${css(...args)}
    }
  `,
  medium: (...args) => css`
    // Applies styles when the screen width is at most the 'medium' breakpoint defined in the theme.
    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
      ${css(...args)}
    }
  `,
  large: (...args) => css`
    // Applies styles when the screen width is at most the 'large' breakpoint defined in the theme.
    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
      ${css(...args)}
    }
  `,
};
