import Hero from "@/components/view/tips/hero";
import ListArticles from "@/components/view/tips/listArticle";
import { getAllBlog } from "@/services/blog.service";
import { Suspense } from "react";

export const revalidate = 3600 * 24;

export default async function TipsPage({ _, searchParams }) {
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
