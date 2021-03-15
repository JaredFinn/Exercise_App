/*

*/

import Session from "./Session";

const posts = [
    {
        user: "Isabella P",
        userHandle: "@Isabel5",
        sport: "Run-Walk",
        title:"Morning walk to get some sunshine!",
        distance:"1 mile",
        time: "30 min",
        fellowFitter:"",
        difficulty:"Just Right",
        status:"Nice morning to get up and walk!",
        img:"https://cdn.cdnparenting.com/articles/2018/11/04122759/562075621-H.jpg"
    },
    {
        user: "Tom B",
        userHandle: "@TBart12",
        sport: "Run/Walk",
        title:"Afternoon Hike To Awosting Falls!",
        distance:"3 Miles",
        time: "2 hours",
        fellowFitter:"@Leo, @Luke",
        difficulty:"Recovery",
        status:"Beautiful afternoon hike in New Paltz. Took a loop to awosting falls!",
        img:"https://i.ytimg.com/vi/xDn_vUuJVyo/maxresdefault.jpg"
    },
    {
        user: "Luke G",
        userHandle: "@LG2200",
        sport: "Swim",
        title:"Morning Practice, Yikes..",
        distance:"8300 yards",
        time: "2 hours",
        fellowFitter:"@HawksSwim",
        difficulty:"Too Hard",
        status:"Was a rough morning practice but feeling good!",
        img:"https://i1.wp.com/www.swimmersdaily.com/wp-content/uploads/2019/09/a-swim-practice-surprise-cody-mi.jpg?fit=1280%2C720&ssl=1"
    },
    {
        user: "Jared F",
        userHandle: "@JaredFinn",
        sport: "Ski-Snowboard",
        title:"Big Shred Day Today!",
        distance:"12 runs",
        time: "6 hours",
        fellowFitter:"@Leo, @Akiva",
        difficulty:"Just Right",
        status:"Hit up hunter mountain today, no friends on a pow day!",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Hunter_Mountain.jpg/240px-Hunter_Mountain.jpg"
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
    