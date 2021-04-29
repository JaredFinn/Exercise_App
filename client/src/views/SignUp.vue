<template>
    <section id="signup-hero" class="hero is-small is-info">
        <div class="hero-body">
            <p class="title">
                Sign Up
            </p>
            <form class="box">
                <div class="columns">
                    <div class="column">
                        <div class="field">
                            <label class="label">First Name</label>
                            <p class="control has-icons-left has-icons-right">
                                <input class="input" v-model="firstName" type="name" placeholder="Eg. Jared">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-user"></i>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="field">
                            <label class="label">Last Name</label>
                            <p class="control has-icons-left has-icons-right">
                                <input class="input" v-model="lastName" type="name" placeholder="Eg. Finn">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-user"></i>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="field">
                    <label class="label">Email</label>
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" v-model="email" type="email" placeholder="Eg. google@gmail.com">
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <label class="label">Username</label>
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" v-model="username" type="username" placeholder="Eg. jaredfinn">
                        <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <label class="label">Password</label>
                    <p class="control has-icons-left">
                        <input class="input" v-model="password" type="password" placeholder="********">
                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                    </p>
                </div>

                <div class="field">
                    <label class="label">Confirm Password</label>
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" v-model="passwordConfirm" type="password" placeholder="********">
                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                            <span v-if="match()" class="icon is-small is-right">
                                <i class="fas fa-check"></i>
                            </span>
                            <span v-else class="icon is-small is-right">
                                <i class="fas fa-times"></i>
                            </span>
                    </p>
                </div>

                <button  class="button is-info" @click="formHandle(), signup(firstName, lastName, email, handle, password)">Sign Up</button>

            </form>
        </div>
    </section>
</template>

<script>
import { AddUser } from "../models/Users";

export default {
    data: () => ({
        username: null,
        firstName: null,
        lastName: null,
        email: null,
        handle: "@",
        password: null,
        passwordConfirm: null,
    }),
    methods: {
        match() {
            if(this.password == this.passwordConfirm)
                return true
            else    
                this.noGo = false
        },
        async signup(firstName, lastName, email, handle, password) {
            await AddUser(firstName, lastName, email, handle, password)

        },
        formHandle(){
            this.handle = this.handle + this.username
        }
    }
}
</script>

<style>
#signup-hero {
    margin: 20px;
}
</style>