import styled from 'styled-components';

const TagsTopSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TagsBottomSection = styled.section`
  display: grid;
  grid-template-rows: 220px 220px;
  grid-template-columns: repeat(3,1fr);
  align-items: center;
  width: 850px;
  padding: 16px;
  margin-left: 350px;
`;

export {
  TagsTopSection, TagsBottomSection,
};
