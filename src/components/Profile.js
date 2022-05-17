// TODO: answer here
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProfileDetail } from "../api/profile";
import PostCard from "./PostCard";


export default function Profile() {
  const {id} = useParams()
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState({})

  
  useEffect(() => {
    const fetchPosts = async () => {
      await getProfileDetail(id).then((response) => {
        if (!!response) {
          setProfile(response.data.data.profile)
          setPosts(response.data.data.posts)
        }
      })
    }
    fetchPosts()
  }, [id])
  return (
    <div>
      <h1>Profile</h1>
      <p aria-label='User Profile Name'>{profile.name}</p>

      {posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          image={post.image}
          caption={post.content}
          userId={profile.id}
          username={profile.name}
          date={post.createdAt}
        />
      ))}
    </div>
  )
}
