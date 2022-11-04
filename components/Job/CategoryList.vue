<template lang="pug">
.category-list
  v-row.pa-0.ma-0
    v-col.pa-0.ma-0
      p.text-h6.font-weight-bold.pt-4.mb-0 Category
    v-col.pa-0.ma-0.d-flex
      v-row.pt-4.mb-1.pr-4.align-end.justify-end(@click="viewAllCategories()")
        p.mb-0 View all
        w-icon.ml-3(
          :height="20"
          :width="20"
          :icon-name="'arrow-forward-outline'"
          :icon-fill="this.$vuetify.theme.themes.light.brown"
          @click=""
        )

  v-row.px-4.scroll-x(:style="scrollSize")
    vue-horizontal-list(
      :items="categories"
      :options="options"
    )
      template(v-slot:default="{item}")
        w-card.d-flex.flex-column(
          @click=""
          :height="150"
          :label="item.name"
          :label2="'View the job related to ' + getName(item.name) + ' job'"
          :color="cardColor(item.id)"
        )
          template(v-slot:action)
            v-row.mt-4
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
import { mapGetters, mapActions } from 'vuex'
import VueHorizontalList from 'vue-horizontal-list';
import WCard from '../componenets-custom/WCard.vue'
import WIcon from '../componenets-custom/WIcon.vue'

export default {
  name: 'CategoryList',
  components: {
    WCard,
    WIcon,
    VueHorizontalList
  },
  props: {
  },
  data () {
    return {
      options: {
        responsive: [
          { end: 500, size: 1.75 }
        ],
        list: {
          // Because: #app {padding: 80px 24px;}
          padding: 8,
        },
      }
    }
  },
  computed: {
    ...mapGetters({
      categories: 'job/getCategories',
      scrollSize: 'screen/getScrollXClass'
    }),
  },
  methods: {
    ...mapActions({
    }),
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
    },
    viewAllCategories () {
      this.$router.push('/categories')
    }
  }
}
</script>

<style lang="scss" scoped>
:deep(.scroll-x) {
  overflow-x: auto !important;
  overflow-y: hidden;
}

:deep(.vhl-item) {
  padding-top: 4px !important;
}
</style>
