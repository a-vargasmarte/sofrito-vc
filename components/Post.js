import Link from "next/link";
import React from "react";
import postStyles from "../styles/Post.module.css";

export default function Post({ post }) {
  return (
    <div className={postStyles.card}>
      <Link href="/post/[id]" as={`/post/${post.id}`}>
        <a>
          <h3>{post.fields.title}</h3>
          <h5>{`Published on: ${post.fields.date}`}</h5>
        </a>
      </Link>
    </div>
  );
}
