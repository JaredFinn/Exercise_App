<template>
    <section id="signup-hero" class="hero is-small is-info">
        <div class="hero-body">
            <p class="title">
                Sign Up
            </p>
            <form class="box">
                <div class="field">
                    <label class="label">Email</label>
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" type="email" placeholder="Eg. google@gmail.com">
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <label class="label">Password</label>
                    <p class="control has-icons-left">
                        <input class="input" type="password" placeholder="********">
                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                    </p>
                </div>

                <div class="field">
                    <label class="label">Confirm Password</label>
                    <p class="control has-icons-left">
                        <input class="input" type="password" placeholder="********">
                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                    </p>
                </div>

                <div class="field">
                    <div class="columns">
                        <div class="column">
                            <label class="label">Height</label>
                            <div class="control">
                                <input class="input" type="height" placeholder="Eg. 5'8&quot;">
                            </div>
                        </div>
                        <div class="column">
                            <label class="label">Weight</label>
                            <div class="control">
                                <input class="input" type="weight" placeholder="Eg. 175">
                            </div>
                        </div>
                    </div>
                </div>
            
                <button class="button is-info">Sign Up</button>
            </form>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
#signup-hero {
    margin: 20px;
}
</style>