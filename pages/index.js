import PostCard from '@/components/PostCard';

export async function getStaticProps() {
  const res = await fetch(
    'https://assessment-1-4n5v.onrender.com/api/posts?populate=*'
  );
  const data = await res.json();
  // https://assessment-in5i.onrender
  return {
    props: {
      posts: data.data,
    },
    revalidate: 10,
  };
}

export default function Home({ posts }) {
  return (
    <>
      <ul className="container flex flex-wrap gap-15 px-10 mx-auto mt-10">
        <PostCard posts={posts} />
      </ul>
    </>
  );
}
