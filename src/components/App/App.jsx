import React from 'react';
import styled from 'styled-components';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';

import { mediaQueries } from '../../mediaQueries';

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

const Main = styled.main`
  --padding-inline: 32px;
  --padding-block: 64px;
  padding-block: var(--padding-block);
  padding-inline: var(--padding-inline);

  ${mediaQueries.medium`
    --padding-block: 48px;
  `}

  ${mediaQueries.small`
    --padding-block: 48px;
    --padding-inline: 16px;
  `}
`;

export default App;
