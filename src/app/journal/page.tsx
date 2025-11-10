import Footer from "@/components/footer";
import JournalCard from "@/components/journal-card";
import PagesHeader from "@/components/pages-header";
import React from "react";

export default function Journal() {
  const posts = [
    {
      id: 1,
      image: "/Images/blog-1.webp",
      author: "ADMIN",
      date: "JAN. 18, 2021",
      comments: 3,
      title: "Build your Dream Software & Engineering Career",
      excerpt:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      slug: "/blog/software-engineering-career",
    },
    {
      id: 2,
      image: "/Images/blog-2.webp",
      author: "ADMIN",
      date: "JAN. 18, 2021",
      comments: 3,
      title: "Build your Dream Software & Engineering Career",
      excerpt:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      slug: "/blog/software-engineering-career",
    },
    {
      id: 3,
      image: "/Images/blog-3.webp",
      author: "ADMIN",
      date: "JAN. 18, 2021",
      comments: 3,
      title: "Build your Dream Software & Engineering Career",
      excerpt:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      slug: "/blog/software-engineering-career",
    },
    {
      id: 4,
      image: "/Images/blog-4.webp",
      author: "ADMIN",
      date: "JAN. 18, 2021",
      comments: 3,
      title: "Build your Dream Software & Engineering Career",
      excerpt:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      slug: "/blog/software-engineering-career",
    },
    {
      id: 5,
      image: "/Images/blog-5.webp",
      author: "ADMIN",
      date: "JAN. 18, 2021",
      comments: 3,
      title: "Build your Dream Software & Engineering Career",
      excerpt:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      slug: "/blog/software-engineering-career",
    },
    {
      id: 6,
      image: "/Images/blog-6.webp",
      author: "ADMIN",
      date: "JAN. 18, 2021",
      comments: 3,
      title: "Build your Dream Software & Engineering Career",
      excerpt:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      slug: "/blog/software-engineering-career",
    },
  ];

  return (
    <main>
      <PagesHeader title="Blog Posts" />

      {/* journal card  */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <JournalCard
                key={post.id}
                id={post.id}
                image={post.image}
                author={post.author}
                date={post.date}
                comments={post.comments}
                title={post.title}
                excerpt={post.excerpt}
                slug={post.slug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer />
    </main>
  );
}
