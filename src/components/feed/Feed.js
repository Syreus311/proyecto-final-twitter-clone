import React, { useEffect, useState } from 'react';
import './Feed.css';
import Post from './Post';
import TweetBox from './TweetBox';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase.js';

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const querySnapshot = await getDocs(collection(db, 'posts'));
            const postsData = querySnapshot.docs.map((doc) => doc.data());
            setPosts(postsData);
        };

        fetchPosts();
    }, []);

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <TweetBox />
            {posts.map((post) => (
                <Post
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                />
            ))}
        </div>
    );
}

export default Feed;
