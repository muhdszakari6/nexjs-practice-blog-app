import fs from "fs"
import path, { format } from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export const getPostsFiles = () => {
    return fs.readdirSync(postsDirectory);
}

export const getPostData = (postIdentifier: any) => {
    const postSlug = postIdentifier.replace(/\.md$/, '')
    const filePath = path.join(postsDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent)
    console.log(postSlug)
    const postData = {
        slug: postSlug,
        ...data,
        content
    }
    return postData
}
export const getAllPosts = () => {
    const postFiles = getPostsFiles()
    console.log(postFiles)
    const allPosts = postFiles.map(postFile => {
        return getPostData(postFile)
    })
    return allPosts.sort((a: any, b: any) => a.date > b.date ? -1 : 1)
}

export const getFeaturedPosts = () => {
    const posts = getAllPosts();
    const featuredPosts = posts.filter((post: any) => post.isFeatured)
    return featuredPosts
}