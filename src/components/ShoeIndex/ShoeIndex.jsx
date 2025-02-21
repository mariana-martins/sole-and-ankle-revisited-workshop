import React from 'react';
import styled from 'styled-components';

import { WEIGHTS } from '../../constants';
import { mediaQueries } from '../../mediaQueries';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';
import { hideContent } from '../GlobalStyles/GlobalStyles';

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <ResponsiveSelect
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </ResponsiveSelect>
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
          <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
        </Breadcrumbs>
        <ResponsiveSpacer size={42} />
        <ResponsiveSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

/**
 * Wrapper
 *
 * A flex container that arranges the main and left columns.
 * - Uses a row-reverse layout on larger screens.
 * - Switches to a column-reverse layout on small and medium screens, with no gap.
 */
const Wrapper = styled.div`
  --flex-wrap: nowrap;
  --flex-direction: row-reverse;
  --gap: 2rem;
  display: flex;
  flex-wrap: var(--flex-wrap);
  flex-direction: var(--flex-direction);
  align-items: baseline;
  gap: var(--gap);

  ${mediaQueries.medium`
    --flex-wrap: wrap-reverse;
    --flex-direction: column-reverse;
    --gap: 0;
  `}

  ${mediaQueries.small`
    --flex-wrap: wrap-reverse;
    --flex-direction: column-reverse;
    --gap: 0;
  `}
`;

/**
 * LeftColumn
 *
 * Container for the sidebar.
 * - Has a fixed width (248px) on larger screens.
 * - Reverts to default sizing on small and medium screens.
 */
const LeftColumn = styled.div`
  --flex-basis: 248px;
  flex-basis: var(--flex-basis);

  ${mediaQueries.medium`
    --flex-basis: revert;
  `}

  ${mediaQueries.small`
    --flex-basis: revert;
  `}
`;

/**
 * MainColumn
 *
 * Container for the primary content.
 * - Grows to fill available space on larger screens.
 * - Reverts to default sizing on small screens.
 */
const MainColumn = styled.div`
  flex: 1;

  ${mediaQueries.small`
    flex: revert;
  `}
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

/**
 * Title
 *
 * Styles the page title.
 * - On small screens, adds a top margin to create space since the Spacer component is hidden.
 */
const Title = styled.h2`
  --margin-top: 8px;
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};

  ${mediaQueries.medium`
    /* Add some space between the breadcrumbs and the title,
    since we are hiding the spacer for medium screens. */
    margin-top: var(--margin-top);
  `}

  ${mediaQueries.small`
    /* Add some space between the breadcrumbs and the title,
    since we are hiding the spacer for small screens. */
    margin-top: var(--margin-top);
  `}
`;

/**
 * ResponsiveSelect
 *
 * A styled version of the Select component.
 * - Hidden on small screens.
 */
const ResponsiveSelect = styled(Select)`
  ${mediaQueries.small`
    ${hideContent()}
  `}
`;

/**
 * ResponsiveSidebar
 *
 * A styled version of the ShoeSidebar component.
 * - Hidden on both medium and small screens.
 */
const ResponsiveSidebar = styled(ShoeSidebar)`
  ${mediaQueries.medium`
    ${hideContent()}
  `}

  ${mediaQueries.small`
    ${hideContent()}
  `}
`;

/**
 * ResponsiveSpacer
 *
 * A styled version of the Spacer component.
 * - Hidden on small screens.
 */
const ResponsiveSpacer = styled(Spacer)`
  ${mediaQueries.medium`
    ${hideContent()}
  `}

  ${mediaQueries.small`
    ${hideContent()}
  `}
`;

export default ShoeIndex;
