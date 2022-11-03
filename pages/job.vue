<template lang="pug">
.fill-height.job-page.pa-0.ma-0
  v-row.pa-0.ma-0.upper-row
    upper-title.ma-0(:title="'Job'")
    w-search-bar.ma-0(@change="searchBy")
  v-row.ma-0.px-4.mt-8.scroll.justify-center
    statistic-card.pb-2
    
</template>

<script>
import UpperTitle from '../components/UpperTitle.vue'
import WSearchBar from '../components/componenets-custom/WSearchBar.vue'
import StatisticCard from '../components/StatisticCard.vue'

export default {
  name: 'JobPage',
  components: {
    UpperTitle,
    WSearchBar,
    StatisticCard
  },
  layout: 'default',
  data () {
    return {
      search: null
    }
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
  height: 300px;
  width: 100% !important;
}

</style>
