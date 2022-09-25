import PostHeader from "./PostHeader";
import ReactMarkdown from "react-markdown";
import classes from "./post-content.module.scss";
import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { language } from "gray-matter";

const PostContent = ({ post }: any) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown
        components={{
          p: ({ node, ...props }) => {
            if ("tagName" in node.children[0]) {
              const image = node.children[0];
              return (
                <div className={classes.image}>
                  {
                    <Image
                      src={`${image.properties!.src as string}`}
                      alt={image.properties!.alt as string}
                      width={600}
                      height={300}
                    />
                  }
                </div>
              );
            }
            return <p>{props.children}</p>;
          },
          code: ({ children, lang, defaultValue, ...props }) => {
            return (
              <SyntaxHighlighter style={dark} language={lang}>
                {children}
              </SyntaxHighlighter>
            );
          },
        }}
      >
        {post.content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
