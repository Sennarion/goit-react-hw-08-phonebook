import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;

export const LabelName = styled.span`
  margin-bottom: ${({ theme }) => theme.spacing(2)};
`;
