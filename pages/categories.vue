<template lang="pug">
.fill-height.job-page.pa-0.ma-0
  v-row.pa-0.ma-0.upper-row
    upper-title.ma-0(:title="'Category'" :icon="'bookmark'" :title-class="'dark-background'" @goBack="goBackToJobPage")
    w-search-bar.ma-0(@change="searchBy")
  .scroll.ma-0.mt-10.justify-top.align-center(:style="scrollSize")
    v-item-group.pt-2.pb-12
      v-row.px-6
        v-col.px-1.py-2(v-for='item in categories' :key="item.id" :cols='6' )
          w-card.d-flex.flex-column(
            @click=""
            :height="150"
            :label="item.name"
            :label2="'View the job related to ' + getName(item.name) + ' job'"
            :color="cardColor(item.id)"
          )
            template(v-slot:action)
              v-row.mt-8
                v-col.py-0
                  v-chip(
                    outlined
                    color="white"
                  )
                    span {{ item.new_job }} New
                v-col.py-0.justify-end.text-right
                  eva-icon(name="arrow-circle-right" fill="white" height="32" width="32")
</template>

<script>
import { mapGetters } from 'vuex'

import UpperTitle from '../components/UpperTitle.vue'
import WSearchBar from '../components/componenets-custom/WSearchBar.vue'
import WCard from '../components/componenets-custom/WCard.vue'

export default {
  name: 'CategoriesPage',
  components: {
    UpperTitle,
    WSearchBar,
    WCard
  },
  layout: 'default',
  data () {
    return {
      search: null
    }
  },
  computed: {
    ...mapGetters({
      categories: 'job/getCategories',
      scrollSize: 'screen/getScrollClass'
    })
  },
  methods: {
    searchBy (newValue) {
      this.search = newValue
    },
    goBackToJobPage () {
      this.$router.push('/job')
    },
    cardColor (id) {
      if (id % 3 === 1) {
        return '#404348'
      } else if (id % 3 === 2) {
        return '#918679'
      } else {
        return '#FEB81E'
      }
    },
    getName (name) {
      return name === 'IT' ? 'information technology' : name.toLowerCase()
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
