import styled from 'styled-components';

const TagsTopSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: calc(25vw - 1.8vw);
`;

const TagsBottomSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 850px;
  padding: 16px 0;
  margin-left: calc(33vw);
`;
// const TagsBottomSection = styled.section`
//   display: grid;
//   grid-template-rows: 220px 220px;
//   grid-template-columns: repeat(3,1fr);
//   align-items: center;
//   width: 850px;
//   padding: 16px;
//   margin-left: 350px;
// `;

export {
  TagsTopSection, TagsBottomSection,
};
