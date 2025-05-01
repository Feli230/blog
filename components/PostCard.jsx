import Image from 'next/image';

const PostCard = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <li
          key={post.id}
          className="bg-amber-50 py-4 px-5 rounded-2xl shadow-2xl"
        >
          <Image
            src={`https://assessment-in5i.onrender.com${post.thumbnail.url}`}
            alt={post.thumbnail.name}
            width={250}
            height={650}
            className="h-56 w-65 rounded-xl object-cover shadow-xl"
          />

          <div className="p-4">
            <h1 className="text-lg font-bold text-gray-700">{post.title}</h1>
            <p className="mt-2 line-clamp-3 text-gray-600">
              {post.description}
            </p>
          </div>
        </li>
      ))}
    </>
  );
};
export default PostCard;
