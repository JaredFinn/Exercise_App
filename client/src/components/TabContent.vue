<template>
    <div>
    <tabs>
      <tab>
          <Feed/>
          <Activity/>
          <Record/>
      </tab>
    </tabs>
  </div>
</template>

<script>
import Feed from "../components/Feed"
import Activity from "../components/Activity"
import Record from "../components/Record"

export default {
    components: {
        Feed,
        Activity,
        Record
    },
    data: () => ({
        tabs: [
            'Feed',
            'Activity',
            'Record'
        ],
    }),
}
</script>

<style>

</style>