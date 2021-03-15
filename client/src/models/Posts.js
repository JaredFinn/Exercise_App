/*

*/

import Session from "./Session";

const posts = [
    {
        sport: "Run-Walk",
        title:"Morning Run",
        distance:"3 Miles",
        time: Date(),
        fellowFitter:"@Leo",
        difficulty:"Too Easy",
        status:"Felt good this morning!!",
        img:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/summer-running-1597413181.jpg?crop=0.812xw:0.795xh;0.0294xw,0&resize=640:*"
    },
    {
        sport: "Run-Walk",
        title:"Night Run",
        distance:"4 Miles",
        time: Date(),
        fellowFitter:"",
        difficulty:"Too Hard",
        status:"It was Dark!",
        img:"https://www.marinij.com/wp-content/uploads/2020/04/MIJ-L-HIKE-0420-02.jpg"
    },
    {
        sport: "Run-Walk",
        title:"Night Run",
        distance:"4 Miles",
        time: Date(),
        fellowFitter:"",
        difficulty:"Too Hard",
        status:"It was Dark!",
        img:"https://www.marinij.com/wp-content/uploads/2020/04/MIJ-L-HIKE-0420-02.jpg"
    },
];

export function GetMyPosts(){
    return GetPostsForUser(Session.currentUser);
}

export function GetPostsForUser(id){
    return posts.filter( x => x.currentUser == id);
}

export function GetMyFeed(){
    return posts;
}
    