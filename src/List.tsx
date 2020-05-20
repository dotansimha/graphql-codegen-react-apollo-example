import React from 'react';
import { useAllPostsQuery } from './generated-types';

export default () => {
  const { data, loading, error } = useAllPostsQuery();

  if (loading) {
    return <div>loading...</div>
  } else if (error) {
    return <div>oops: {error.message}</div>
  }

  return (
    <ul>
      {data?.posts?.map(post => (
        <li key={post?.id}>
          {post?.title}
          {' '}
            by {post?.user.firstname}
          {' '}
            ({post?.comments?.length} comments)
          {' '}
        </li>
      ))}
    </ul>
  );
};
