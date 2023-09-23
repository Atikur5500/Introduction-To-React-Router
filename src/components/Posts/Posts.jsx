import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData()
    console.log(posts)

    return (
        <div className="grid grid-cols-5 gap-5 p-5">
           {
            posts.map(item => <Post key={item.id} post={item}></Post>)
           }
        </div>
    );
};

export default Posts;