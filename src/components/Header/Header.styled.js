import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.max};
  font-weight: 700;
`;

export const NavItem = styled(NavLink)`
  color: ${({ theme }) => theme.colors.dark};

  &.active {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
