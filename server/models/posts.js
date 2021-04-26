/*

*/
const users = require("./users")

const list = [
    {
        userHandle: "@ispast",
        sport: "Run-Walk",
        title:"Morning walk to get some sunshine!",
        distance:"1 mile",
        time: "30 min",
        fellowFitter:"",
        difficulty:"Just Right",
        status:"Nice morning to get up and walk!",
        img:"https://cdn.cdnparenting.com/articles/2018/11/04122759/562075621-H.jpg",
        isPublic: true,
    },
    {
        user: "LeoLit",
        userHandle: "@leolit",
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
        user: "LukeGamboli",
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
        user: "JaredFinn",
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

const listWithOwner = () => list.map((x, i) => ({ 
  ...x, 
  users: users.GetByHandle(x.userHandle) 
}) );

module.exports.GetAll = () => { 
    return listWithOwner();
}

module.exports.GetWall = (handle) => { 
  return listWithOwner().filter(post => post.userHandle == handle);
}

module.exports.GetFeed = (handle) => listWithOwner()
  .filter(post => users.GetByHandle(handle).following.some(f => f.handle == post.userHandle && f.isApproved) );

module.exports.Get = (post_id) => list[post_id];
module.exports.Add = ( post ) => {
    if(!post.userHandle){
        throw {code: 422, msg: "Post must have an Owner"}
    }
    list.push(post);
    return { ...post };
}
module.exports.Update = (post_id, post ) => {
    const oldObj = list[post_id];
    const newObj = { ...oldObj, ...post };
    list[post_id] = newObj;
    return newObj;
}
module.exports.Delete = (post_id) => {
    const post = list[post_id];
    list.splice(post_id, 1);
    return post;
}