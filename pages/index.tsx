import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import FeaturedPosts from "../components/featured-posts/FeaturedPosts";
import Hero from "../components/hero/Hero";
import { getFeaturedPosts } from "../lib/post-util";
const Home: NextPage = ({ posts }: any) => {
  return (
    <>
      <Head>
        <title>Welcome to Free Smoke Blog</title>
        <meta name="description" content="You will catch free smoke" />
      </Head>
      <Hero></Hero>
      <FeaturedPosts posts={posts}></FeaturedPosts>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 100,
  };
};

export default Home;
