import styled from 'styled-components';

const PaginationSection = styled.section`
  display: flex;
  /* margin: 30px; */
  margin-bottom: 30px;
  margin-left: calc(55vw);
`;

const PageBox = styled.a`
  padding: 5px 8px;
  font-size: 13px;
  color: white;
  background-color: #F48225;
  border: 1px solid white;
  border-radius: 3px;
  text-decoration: none;
`;

export {
  PaginationSection,
  PageBox,
};
