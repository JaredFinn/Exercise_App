/*
    Access to all the posts
*/

//import Session from "./Session";
import { api } from "../models/myFetch";


export function GetMyPosts(){
    return api("posts")
}

export function GetPostsForUser(handle){
    return api(`posts/${handle}`)
}

export function GetMyFeed(){
    return api("posts/feed")
}

export function AddPost(post){
    return api("posts", post)
}

export function GetAllPosts(){
    return api("posts/all")
}