import React from 'react';
import styled from 'styled-components';

import { WEIGHTS } from '../../constants';
import { mediaQueries } from '../../mediaQueries';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import Spacer from '../Spacer';
import ShoeSidebar from '../ShoeSidebar';
import ShoeGrid from '../ShoeGrid';

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
 * - Switches to a column-reverse layout on small screens, with no gap.
 */
const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;

  ${mediaQueries.small`
    flex-wrap: wrap;
    flex-direction: column-reverse;
    gap: 0
  `}
`;

/**
 * LeftColumn
 *
 * Container for the sidebar.
 * - Has a fixed width (248px) on larger screens.
 * - Reverts to default sizing on small screens.
 */
const LeftColumn = styled.div`
  flex-basis: 248px;

  ${mediaQueries.small`
    flex-basis: revert;
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
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};

  ${mediaQueries.small`
    /* Add some space between the breadcrumbs and the title,
    since we are hiding the spacer for small screens. */
    margin-top: 8px;
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
    display: none;
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
    display: none;
  `}

  ${mediaQueries.small`
    display: none;
  `}
`;

/**
 * ResponsiveSpacer
 *
 * A styled version of the Spacer component.
 * - Hidden on small screens.
 */
const ResponsiveSpacer = styled(Spacer)`
  ${mediaQueries.small`
    display: none;
  `}
`;

export default ShoeIndex;
