import Hero from "@/components/view/blog/hero";
import ListArticles from "@/components/view/blog/listArticle";
import { getAllBlog } from "@/services/blog.service";
import { Suspense } from "react";

export const revalidate = 3600 * 24;

export default async function BlogPage({ _, searchParams }) {
  const lists = await getAllBlog(searchParams.search);

  return (
    <main>
      <Hero></Hero>
      <br></br>
      <Suspense fallback={<div>Loading articles</div>}>
        <ListArticles lists={lists}></ListArticles>
      </Suspense>
      <br></br>
    </main>
  );
}
