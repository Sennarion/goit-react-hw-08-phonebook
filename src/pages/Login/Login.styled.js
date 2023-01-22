import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-intems: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  display: block;
  min-width: 300px;
  padding: ${({ theme }) => theme.spacing(3)};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(6)};

  &:focus {
    border-color: ${({ theme }) => theme.colors.accent};
    outline: transparent;
  }
`;
