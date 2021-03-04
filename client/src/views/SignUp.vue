<template>
    <section class="hero is-small is-link">
        <div class="hero-body">
            <h1 id="Login-name">Sign Up</h1>
            <form class="box">
                <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input class="input" type="email" placeholder="e.g. alex@example.com">
                </div>
                </div>
            
                <div class="field">
                <label class="label">Password</label>
                <div class="control">
                    <input class="input" type="password" placeholder="********">
                </div>
                </div>

                <div class="field">
                    <label class="label">Confirm Password</label>
                    <div class="control">
                        <input class="input" type="password" placeholder="********">
                    </div>
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
            
                <button class="button is-primary">Sign Up</button>
            </form>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>