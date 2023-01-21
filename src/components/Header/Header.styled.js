import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  padding-top: ${({ theme }) => theme.spacing(6)};
  padding-bottom: ${({ theme }) => theme.spacing(6)};
  background-color: ${({ theme }) => theme.colors.light};
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

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
