import classes from "./all-post.module.scss";
import PostGrid from "./PostsGrid";
const AllPosts = ({ posts }: any) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
