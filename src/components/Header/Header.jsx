import React from 'react';
import styled from 'styled-components';

import { COLORS, WEIGHTS } from '../../constants';
import { mediaQueries } from "../../mediaQueries";
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Button from '../UnstyledButton'
import Icon from '../Icon';

const Header = () => {
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        {/* ---  Main navigation for larger screens  --- */}
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />

        {/* ---  Icon buttons for shopping cart, search, and mobile menu toggle  --- */}
        <Box>
          <Button>
            <Icon
              id={"shopping-bag"}
              size="24px"
              color={COLORS.gray[900]}
              strokeWidth="2"
            />
          </Button>
          <Button>
            <Icon
              id={"search"}
              size="24px"
              color={COLORS.gray[900]}
              strokeWidth="2"
            />
          </Button>
          <MobileMenu />
        </Box>
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  --justify-content: space-between;
  --align-items: baseline;
  --padding: 18px 32px;
  display: flex;
  align-items: var(--align-items);
  padding: var(--padding);
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  ${mediaQueries.medium`
    justify-content: var(--justify-content);
    --align-items: center;
  `}

  ${mediaQueries.small`
    justify-content: var(--justify-content);
    --align-items: center;
    --padding: 18px 16px;
  `}
`;

const Box = styled.div`
  --display: none;
  display: var(--display);

  ${mediaQueries.medium`
    --display: flex;
    gap: 2rem;
  `}

  ${mediaQueries.small`
    --display: flex;
    gap: 1rem;
  `}
`;

const Nav = styled.nav`
  --display: flex;
  display: var(--display);
  gap: 48px;
  margin: 0px 48px;

  // Hides navigation menu on small, and medium screens
  ${mediaQueries.medium`
    --display: none;
  `}

  ${mediaQueries.small`
    --display: none;
  `}
`;

const Side = styled.div`
  flex: 1;

  ${mediaQueries.medium`
    flex: unset;
  `}

  ${mediaQueries.small`
    flex: unset;
  `}
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
