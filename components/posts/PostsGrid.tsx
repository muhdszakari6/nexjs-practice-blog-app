import PostItem from "./PostItem";
import classes from "./posts-grid.module.scss";
const PostGrid = ({ posts }: any) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post: any) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostGrid;
