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
            src={`http://127.0.0.1:1337${post.thumbnail.url}`}
            alt=""
            width={250}
            height={650}
            className="h-56 rounded-xl object-cover shadow-xl"
          />

          <div className="p-4">
            <h1 className="text-lg font-medium text-gray-700">{post.title}</h1>
            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              {post.description}
            </p>
          </div>
        </li>
      ))}
    </>
  );
};
export default PostCard;
