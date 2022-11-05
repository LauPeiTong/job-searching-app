<template lang="pug">
.fill-height.job-page.pa-0.ma-0
  v-row.pa-0.ma-0.upper-row
    upper-title.ma-0(:title="'Job'" :icon="'bookmark'")
    w-search-bar.ma-0(@change="searchBy")
  .scroll.ma-0.justify-top.align-center(:style="scrollSize")
    statistic-card.pt-10.pb-2
    category-list.pb-4
    job-list.px-4.pb-4(:items="recommendedJob" :title="'Recommeded for you'")
</template>

<script>
import { mapGetters } from 'vuex'

import UpperTitle from '../components/UpperTitle.vue'
import WSearchBar from '../components/componenets-custom/WSearchBar.vue'
import StatisticCard from '../components/Job/StatisticCard.vue'
import CategoryList from '../components/Job/CategoryList.vue'
import JobList from '../components/Job/JobList.vue'

export default {
  name: 'JobPage',
  components: {
    UpperTitle,
    WSearchBar,
    StatisticCard,
    CategoryList,
    JobList
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
      recommendedJob: 'job/getRecommededJob'
    })
  },
  methods: {
    searchBy (newValue) {
      this.search = newValue
    }
  }
}
</script>

<style scoped>
:deep(.scroll) {
  overflow-x: hidden;
  overflow-y: auto;
  width: 100% !important;
}

</style>
