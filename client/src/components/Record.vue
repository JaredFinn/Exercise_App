<template>
    <div class="record">
        <form @submit.prevent="addPost">
            <article class="box">
                <div class="progress-box">
                    <p class="progress-percent">You are <strong class="is-size-4">60%</strong> done with your daily goal!</p>
                    <progress class="progress is-success" value="60" max="100">60%</progress>
                </div>
                    
                <article class="panel is-info">
                <p class="panel-heading">
                    Record Your Workout
                </p>
                <p class="panel-tabs">
                    <a class="exercises is-active">Run/Walk</a>
                    <a class="exercises">Swim</a>
                    <a class="exercises">Bike</a>
                    <a class="exercises">Gym</a>
                    <a class="exercises">Ski/Snowboard</a>
                </p>

                <div class="field">
                    <label class="label">Title</label>
                    <div class="control">
                    <input class="input" type="text" placeholder="Give your workout a name!" >
                    </div>
                </div>
                
                <div class="columns">
                    <div class="column is half">
                    <div class="field">
                        <label class="label">Distance</label>
                        <div class="control has-icons-left has-icons-right">
                        <input class="input" type="text" placeholder="E.g. 4 miles">
                        <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                        </span>
                        </div>
                    </div>
                    </div>
                    <div class="column is half">
                    <div class="field">
                        <label class="label">Time</label>
                        <div class="control has-icons-left has-icons-right">
                        <input class="input" type="text" placeholder="How long did it take?">
                        <span class="icon is-small is-left">
                            <i class="fas fa-stopwatch"></i>
                        </span>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Anyone Join?</label>
                    <div class="control has-icons-left has-icons-right">
                    <input class="input" type="text" placeholder="Tag those that joined you!">
                    <span class="icon is-small is-left">
                        <i class="fas fa-user"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                    </span>
                    </div>
                </div>
                
                <div class="field">
                    <label class="label">Difficulty</label>
                    <div class="control">
                        <div class="select is-info">
                            <select>
                                <option>Select Option</option>
                                <option>Too Easy</option>
                                <option>Easy</option>
                                <option>Just Right</option>
                                <option>Hard</option>
                                <option>Too Hard</option>
                                <option>Recovery</option>
                            </select>
                        </div>
                    </div>
                </div>
                
                <div class="field">
                    <label class="label">Caption</label>
                    <div class="control">
                    <textarea class="textarea" placeholder="Share your experience!"></textarea>
                    </div>
                </div>
                
                <div class="field is-grouped">
                    <div class="control">
                    <button class="button is-info">Post</button>
                    </div>
                    <div class="control">
                    <button class="button is-info is-light">Cancel</button>
                    </div>
                </div>
                </article>
            </article>
        </form>
    </div>
    
</template>

<script>
export default {

}
</script>

<style>
.feed{
    margin-left: 75px;
    margin-right: 75px;
    padding-top: 20px;
}
.field{
    padding-left: 40px;
    padding-right: 40px;
    margin-top: 10px;
}
.progress-box{
    margin-bottom: 20px;
}
.control{
    margin-bottom: 10px;
}
.exercises{
    color: gray;
}
</style>