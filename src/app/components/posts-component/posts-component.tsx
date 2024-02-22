import { useGetPostsQuery } from 'src/app/state/api';
import styles from './posts-component.module.css';
import PostItemComponent from '../post-item-component/post-item-component';
import { DURATION_10_SECONDS_IN_MILLISECONDS } from 'src/app/constants';

/* eslint-disable-next-line */
export interface PostsComponentProps {}

export function PostsComponent(props: PostsComponentProps) {
  const {
    data: posts = [],
    isLoading,
    isError,
    refetch,
  } = useGetPostsQuery(undefined, {
    pollingInterval: DURATION_10_SECONDS_IN_MILLISECONDS,
  });

  const postsLength = posts.length;

  return (
    <div className={styles['posts-component']}>
      <h1 className={styles['posts-header']}>All posts ({postsLength})</h1>
      {!isError && (
        <>
          {isLoading && (
            <div>
              <h4>Loading...</h4>
            </div>
          )}
          {!isLoading && posts && (
            <div className={styles['posts-container']}>
              {posts.map((post) => (
                <PostItemComponent post={post} key={post.id} />
              ))}
            </div>
          )}
        </>
      )}
      {isError && (
        <div>
          <h4>Error fetching posts</h4>
          <button onClick={refetch}>Retry</button>
        </div>
      )}
    </div>
  );
}

export default PostsComponent;
