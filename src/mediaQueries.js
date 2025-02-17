export const mediaQueries = {
  small: (...args) => css`
    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
      ${css(...args)}
    }
  `,
  medium: (...args) => css`
    @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
      ${css(...args)}
    }
  `,
  large: (...args) => css`
    @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
      ${css(...args)}
    }
  `,
};
