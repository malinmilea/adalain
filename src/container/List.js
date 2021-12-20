import React, { useState, useEffect } from "react";
import Post from "../components/Post/Post";
import { request } from 'graphql-request';
import Spinner from "../components/Spinner/Spinner";

const List = () => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        const query = `{
            allPosts(count: 25) {
              id
              title
              body
              published
              createdAt
              author {
                id
                firstName
                lastName
                avatar
              }
            }
          }`;

        request('https://fakerql.goosfraba.ro/graphql', query).then(data => {
            console.log(data);
            setPosts(data)
        });
    }, [])

    let list = <Spinner />;

    if (posts) {
        list = posts.allPosts
            .sort((a, b) => a.createdAt - b.createdAt)
            .map(post => {
                const date = new Date(+post.createdAt);
                console.log(date)
                const info = {
                    author: post.author.firstName.concat(" ", post.author.lastName),
                    picture: post.author.avatar,
                    content: post.body,
                    tite: post.title,
                    day: date.getDate(),
                    year: date.getFullYear(),
                    month: date.getMonth()
                }
                return <Post key={date} info={info} />
            })
    }
    return (<div>
        {list}
    </div>)
}

export default List;