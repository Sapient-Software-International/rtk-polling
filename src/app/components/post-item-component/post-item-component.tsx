import { IPost } from 'src/app/types';
import styles from './post-item-component.module.css';

/* eslint-disable-next-line */
export interface PostItemComponentProps {
  post: IPost;
}

export function PostItemComponent({ post }: PostItemComponentProps) {
  return (
    <div className={styles['post-item']}>
      <h3 className={styles['post-title']}>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

export default PostItemComponent;
