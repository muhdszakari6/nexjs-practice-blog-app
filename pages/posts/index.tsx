import { GetStaticProps } from "next";
import AllPosts from "../../components/posts/AllPosts";
import { getAllPosts } from "../../lib/post-util";

const Posts = ({ posts }: any) => {
  return (
    <>
      <AllPosts posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const featuredPosts = getAllPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 100,
  };
};

export default Posts;
