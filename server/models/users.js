/*

*/
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const axios = require('axios').default;

const SALT_ROUNDS = process.env.SALT_ROUNDS;
const JWT_SECRET = process.env.JWT_SECRET;

const list = [
    {
        firstName: 'Jared',
        lastName: 'Finn',
        handle: '@jaredfinn',
        pic: 'https://bulma.io/images/placeholders/96x96.png',
        password: '$2b$08$BY4N6rJfNlF9B00iwvc/fO1.ziIptuFZFfTQ1Lj7m1CxgJ4dQYdzO',
        email: 'jaredhfinn@gmail.com',
        isAdmin: true,
        following: [ { handle: '@ispast', isApproved: true }, { handle: '@johnsmith', isApproved: true }, ],
    },
    {
        firstName: 'Isabella',
        lastName: 'Pastore',
        handle: '@ispast',
        pic: 'https://bulma.io/images/placeholders/96x96.png',
        password: '$2b$08$QF/WdsBfo/5Mt2dG0XXjzOSB/tgBC9jIoBrAc/dppDcRiRF12BPhq',
        isAdmin: true,
        following: [ { handle: '@jaredfinn', isApproved: true }, ],
    },
    {
        firstName: 'Leo',
        lastName: 'Lit',
        handle: '@leolit',
        pic: 'https://bulma.io/images/placeholders/96x96.png',
        password: 'BeepBop',
        isAdmin: true,
        following: [ { handle: '@vp', isApproved: true }, ],
    },
];

module.exports.GetAll = () => list;
module.exports.Get = (user_id) => list[user_id];
module.exports.GetByHandle = (handle) => ({ ...list.find( (x, i) => x.handle == handle ), password: undefined }) 

module.exports.Add = ( user ) => {
    if(!user.handle){
        throw {code: 422, msg: "First Name is Required "}
    }
    list.push(user);
    return { ...user, password: undefined }
}
module.exports.Register =  async ( user ) => {

    const hash = await bcrypt.hash(user.password, +SALT_ROUNDS)

    user.password = hash;

    if(!user.handle || !user.password){
        throw {code: 422, msg: "Handle and password are required to sign up"}
    }
    list.push(user);
    console.log("Signed Up: " + { user })
    return { ...user, password: undefined }
}
module.exports.Update = (user_id, user ) => {
    const oldObj = list[user_id];
    if(user.firstName){
        oldObj.firstName = user.firstName;
    }
    if(user.firstName){
        oldObj.lastName = user.lastName;
    }
    if(user.firstName){
        oldObj.handle = user.handle;
    }
    if(user.firstName){
        oldObj.pic = user.pic;
    }
    return { ...oldObj, password: undefined };
}
module.exports.Delete = (user_id) => {
    const user = list[user_id];
    list.splice(user_id, 1);
    return user;
}

module.exports.Login = async (handle, password) => {
    console.log({ handle, password})
    const user = list.find(x => x.handle == handle)
    if(!user) throw {code: 401, msg: "Sorry there is no user with that handle"};

    if(! await bcrypt.compare(password, user.password)){
        throw {code: 401, msg: "Wrong Password"};
    }

    const data = { ...user, password: undefined };

    const token = jwt.sign(data, JWT_SECRET);

    return { user: data, token};
}

module.exports.LoginFB = async (access_token) =>{
    console.log({ access_token })

    const userFB = await axios.get(`https://graph.facebook.com/v10.0/me?fields=first_name,last_name,email,picture&access_token=${access_token}`)
    console.log(userFB.data);

    // Get a verified email address from facebook
    let user = list.find(x=> x.email == userFB.data.email);
    if(!user) {
        user = {
            firstName: userFB.data.first_name,
            lastName: userFB.data.last_name,
            pic: userFB.data.picture.data.url,
            email: userFB.data.email,
            handle:  userFB.data.email
        };
        list.push(user);
    }

    const data = { ...user, password: undefined };

    const token = jwt.sign(data, JWT_SECRET)

    return { user: data, token };
}

module.exports.Logout = async (handle, password) => {
    console.log("Logging out: " +{ handle, password})

    return { user: null, token: null};
}

module.exports.FromJWT = async (token) => {
    try{
        const user = jwt.verify(token, JWT_SECRET);
        return user;
    } catch (error){
        console.log({error});
        return null;
    }
}