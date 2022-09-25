import Link from "next/link";
import classes from "./post-item.module.scss";
import Image from "next/image";

const PostItem = ({ post }: any) => {
  const { title, image, date, excerpt, slug } = post;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <li className={classes.post}>
      <Link href={`posts/${slug}`}>
        <a>
          <div className={classes.image}>
            <Image
              src={`/images/posts/${slug}/${image}`}
              alt={title}
              height={200}
              width={200}
              layout="responsive"
            ></Image>
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
