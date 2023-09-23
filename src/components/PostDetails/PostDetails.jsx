import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData()
    console.log(post)
    const {title, id} = post;
    return (
        <div className="p-5">
            <p className="text-xl">Post Id:{id}</p>
            <p className="text-lg">Post Details:{title}</p>
        </div>
    );
};

export default PostDetails;