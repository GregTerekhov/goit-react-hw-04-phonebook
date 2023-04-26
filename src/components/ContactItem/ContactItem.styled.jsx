import styled from '@emotion/styled';

export const SearchButton = styled.button`
  width: 150px;
  margin-left: 48px;
  font-size: 18px;
  background-color: #3160cd;
  color: #f4f4f4;
  border: none;
  outline: none;
  border-radius: 20px;
  padding: 8px 16px;
  cursor: pointer;
  transition: outline-color 250ms ease, box-shadow 250ms ease;

  &:hover,
  &:focus {
    box-shadow: 0px 2px 6px 2px #4e4e4e;
    outline: 1px solid #f4f4f4;
  }
`;
