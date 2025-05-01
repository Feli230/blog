import PostCard from '@/components/PostCard';

export async function getStaticProps() {
  const res = await fetch('http://127.0.0.1:1337/api/posts?populate=*');
  const data = await res.json();

  return {
    props: {
      posts: data.data,
    },
  };
}

export default function Home({ posts }) {
  return (
    <>
      <div className="flex justify-center items-center">
        <h1 className="text-3xl mt-5 text-blue-400 font-bold">BLOG POSTS</h1>
      </div>
      <ul className="container flex flex-wrap gap-15 px-10 mx-auto mt-10">
        <PostCard posts={posts} />
      </ul>
    </>
  );
}
