import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import styled from 'styled-components';

import { COLORS, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = () => {
  return (
    <Dialog.Root>
      {/* Menu Toggle Button */}
      <Dialog.Trigger asChild>
        <UnstyledButton aria-label="Open menu">
          <Icon
            id="menu"
            size="24px"
            color={COLORS.gray[900]}
            strokeWidth="2"
            aria-hidden="true"
          />
        </UnstyledButton>
      </Dialog.Trigger>

      {/* Menu Content (Modal) */}
      <Dialog.Portal>
        <Overlay />
        <Content role="dialog" aria-labelledby="menu-title">
          <Header>
            <Dialog.Close asChild>
              <CloseButton aria-label="Close menu">
                <Icon
                  id="close"
                  size="24px"
                  color={COLORS.gray[900]}
                  strokeWidth="2"
                  aria-hidden="true"
                />
              </CloseButton>
            </Dialog.Close>
          </Header>

          {/* Visually hidden menu title for accessibility */}
          <VisuallyHidden>
            <h2 id="menu-title">Menu</h2>
          </VisuallyHidden>

          {/* Navigation Links */}
          <Nav>
            <a href="/sale">Sale</a>
            <a href="/new">New Releases</a>
            <a href="/men">Men</a>
            <a href="/women">Women</a>
            <a href="/kids">Kids</a>
            <a href="/collections">Collections</a>
          </Nav>

          {/* Footer Links */}
          <Footer>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </Footer>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

/* Darkened overlay that appears when menu is open */
const Overlay = styled(Dialog.Overlay)`
  background: hsla(220, 5%, 40%, 0.8);
  position: fixed;
  inset: 0;
`;

/* Main menu container (side panel) */
const Content = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  width: 80%;
  max-width: 300px;
  height: 100vh;
  padding: 32px;
  background: ${COLORS.white};
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.2);
`;

/* Header section containing close button */
const Header = styled.div`
  margin-bottom: auto;
`;

/* Close button styling */
const CloseButton = styled(UnstyledButton)`
  position: relative;
  right: -16px;
  top: -6px;
  cursor: pointer;
  margin-left: auto;
  margin-bottom: auto;
`;

/* Navigation menu styles */
const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.375rem;

  a {
    color: ${COLORS.gray[900]};
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: ${WEIGHTS.medium};
    text-transform: uppercase;

    &:hover {
      color: ${COLORS.secondary};
    }
  }
`;

/* Footer links section */
const Footer = styled.footer`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;

  a {
    font-weight: ${WEIGHTS.normal};
    font-size: 0.875rem;
    color: ${COLORS.gray[700]};
    text-decoration: none;
  }
`;

export default MobileMenu;
