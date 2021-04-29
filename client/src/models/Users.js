/*

*/

import { api } from "./myFetch";

export function GetAllUsers(){
    return api("users");
}

export async function AddUser(firstName, lastName, email, handle, password){
    return api("users/register", {firstName, lastName, email, handle, password})
}