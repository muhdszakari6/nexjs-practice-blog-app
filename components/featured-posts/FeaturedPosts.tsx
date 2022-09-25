import PostGrid from "../posts/PostsGrid";
import classes from "./featured-posts.module.scss";
PostGrid;

const FeaturedPosts = ({ posts }: any) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={posts}></PostGrid>
    </section>
  );
};

export default FeaturedPosts;
