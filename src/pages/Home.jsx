import React, { Fragment, useEffect, useState } from 'react';
import HomePost from '../components/HomePost';
import axios from 'axios';
import { URL } from '../url.js';
import { Link } from "react-router-dom";

const Home = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const res = await axios.get(`${URL}/api/posts/`);
            setPosts(res.data.posts)
            console.log(res.data.posts)
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchPosts()
    }, []);
    return (
        <Fragment>
            {/* {console.log(posts)} */}
            <div className="px-8 md:px-[200px] min-h-[80vh]">
                {posts.map((post) => (
                    <>
                        <Link to={`/posts/post/${post._id}`} key={post._id}>
                            <HomePost post={post} />
                        </Link>
                    </>
                ))}
            </div>
        </Fragment>

    )
}

export default Home
