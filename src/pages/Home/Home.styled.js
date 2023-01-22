import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const glow = keyframes`
    40% {
      text-shadow: 0 0 8px #111;
    }`;

export const Title = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizes.title};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing(10)};
`;

export const Logo = styled.span`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.dark};
  animation: ${glow} 2500ms linear infinite 2000ms;
`;

export const Text = styled.p`
  margin: 0 auto;
  max-width: 650px;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(10)};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const StyledLink = styled(Link)`
  min-width: 135px;
  padding: ${({ theme }) => theme.spacing(4)} ${({ theme }) => theme.spacing(8)};
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;
  color: ${({ theme }) => theme.colors.dark};
  border-radius: ${({ theme }) => theme.spacing(1)};
  transition: background-color ${({ theme }) => theme.animation.cubicBezier},
    color ${({ theme }) => theme.animation.cubicBezier};

  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.white};
  }
`;
