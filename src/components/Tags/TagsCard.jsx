import React from 'react';

import {
  TagCardSection,
  TagCardTitle,
  TagCardTextTopBox,
  TagCardTopContent,
  TagCardBottomContent,
  TagCardTextBottomBox,
} from '../../styles/Tags/TagCard';

function TagsCard({ tag }) {
  const url = import.meta.env.VITE_CLIENT_DOMAIN;
  const TagClickHandler = () => {
    window.location.href = `${url}/questions/tags/${tag.tagName}`;
  };
  return (
    <TagCardSection>
      <TagCardTextTopBox>
        <TagCardTitle onClick={TagClickHandler}>
          {tag.tagName}
        </TagCardTitle>
        <TagCardTopContent>
          {tag.tagContent}
        </TagCardTopContent>
      </TagCardTextTopBox>
      <TagCardTextBottomBox>
        <TagCardBottomContent>
          {tag.tagMentionCount}
        </TagCardBottomContent>
        <TagCardBottomContent>questions</TagCardBottomContent>
      </TagCardTextBottomBox>
    </TagCardSection>
  );
}

export default TagsCard;
