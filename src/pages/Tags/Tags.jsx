import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { TagsTopSection, TagsBottomSection } from '../../styles/Tags/Tags';
import TagTop from '../../components/Tags/TagTop';
import TagsCard from '../../components/Tags/TagsCard';
import TagPagination from '../../components/Tags/TagPagination';

function Tags() {
  const [tags, setTags] = useState({});
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || 1;
  const tab = searchParams.get('tab') || 'popular';
  const url = import.meta.env.VITE_URL;

  const tagsFetch = async () => {
    const res = await fetch(`${url}/tags?page=${page}&tab=${tab}`, {
      method: 'GET',
      headers: {
        'ngrok-skip-browser-warning': true,
      },
    });
    const json = await res.json();
    setTags(json);
  };

  useEffect(() => {
    tagsFetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <TagsTopSection>
        <TagTop />
      </TagsTopSection>
      <TagsBottomSection>
        {tags.result && tags.result.map((tag) => (
          <TagsCard tag={tag} key={tag.tagId} />
        ))}
      </TagsBottomSection>
      {tags.pageInfo && <TagPagination pageInfo={tags.pageInfo} />}
    </>
  );
}

export default Tags;
