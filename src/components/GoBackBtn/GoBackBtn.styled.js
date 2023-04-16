import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const GoBackButton = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.06em;
  border: 1px solid ${({ theme }) => theme.colors.light};
  border-radius: 4px;
  margin-bottom: 60px;
  padding: 12px 18px;
  transition: background-color ${({ theme }) => theme.animations.cubicBezier};
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.imageBackground};
  }
`;
