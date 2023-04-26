import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

export const ListItem = styled.li`
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  & + & {
    margin-top: 16px;
  }
`;
