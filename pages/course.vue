<template lang="pug">
.fill-height.course-page.pa-0.ma-0
  v-row.pa-0.ma-0.upper-row
    upper-title.ma-0(:title="'Course'" :icon="'bookmark'")
    w-search-bar.ma-0(@change="searchBy")
  .scroll.ma-0.mt-10.justify-top.align-center(:style="scrollSize")
</template>

<script>
import { mapGetters } from 'vuex'

import UpperTitle from '../components/UpperTitle.vue'
import WSearchBar from '../components/componenets-custom/WSearchBar.vue'

export default {
  name: 'CoursePage',
  components: {
    UpperTitle,
    WSearchBar
  },
  layout: 'default',
  data () {
    return {
      search: null
    }
  },
  computed: {
    ...mapGetters({
      scrollSize: 'screen/getScrollClass',
    })
  },
  methods: {
    searchBy (newValue) {
      this.search = newValue
    }
  }
}
</script>
