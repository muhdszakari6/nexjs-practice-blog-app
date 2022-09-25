import { GetStaticPaths, GetStaticProps } from "next";
import PostContent from "../../components/posts/post-detail/PostContent";
import { getPostData, getPostsFiles } from "../../lib/post-util";

const Post = ({ post }: any) => {
  return <PostContent post={post} />;
};

export const getStaticProps: GetStaticProps = async (ctx: any) => {
  const { params } = ctx;
  const { slug } = params;
  const post = getPostData(slug);
  return {
    props: {
      post: post,
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = async (ctx: any) => {
  const filenames = getPostsFiles();
  const slugs = filenames.map((filename) => filename.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
};

export default Post;
