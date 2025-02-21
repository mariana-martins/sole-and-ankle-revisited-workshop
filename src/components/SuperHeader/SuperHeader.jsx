import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import { mediaQueries } from '../../mediaQueries';

import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import { hideContent } from '../GlobalStyles/GlobalStyles';

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <SearchInput />
      <HelpLink href="/help">Help</HelpLink>
      <UnstyledButton>
        <Icon id="shopping-bag" strokeWidth={1} />
      </UnstyledButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  --height: 40px;
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  height: var(--height);
  padding-left: 32px;
  padding-right: 32px;

  /* Redefine the height for small and medium screens,
  and hide all direct children elements. */
  ${mediaQueries.medium`
    --height: 4px;
    > * {
      ${hideContent()}
    }
  `}

  ${mediaQueries.small`
    --height: 4px;
    > * {
      ${hideContent()}
    }
  `}
`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  margin-right: auto;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
