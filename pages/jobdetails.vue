<template lang="pug">
.fill-height.job-details-page.pa-0.ma-0(v-if="!!job")
  v-row.pa-0.ma-0.upper-row
    upper-title.ma-0(:title="'Job Details'" :icon="'bookmark'" :title-class="'dark-background'" @goBack="goBackToPreviousPage" :back="true")
  .scroll.ma-0.mt-5.justify-top.align-center(:style="scrollSize")
    v-row
      v-col.pt-4.px-8(:cols="12")
        v-avatar(size="130" )
          v-img(:src="companyLogo" contain)
</template>

<script>
import { mapGetters } from 'vuex'

import UpperTitle from '../components/UpperTitle.vue'

export default {
  name: 'JobDetailsPage',
  components: {
    UpperTitle
  },
  layout: 'job',
  data () {
    return {
      search: null
    }
  },

  computed: {
    ...mapGetters({
      job: 'job/getSelectedJob',
      company: 'job/getCompany',
      scrollSize: 'screen/getScrollClass'
    }),
    companyLogo () {
      return require(`../assets/logo/${this.company.img}.jpg`)
    } 
  },
  mounted () {
    this.check()
  },
  methods: {
    check () {
      if (this.selectedJob === null) {
        this.$router.push('/job')
      }
    },
    searchBy (newValue) {
      this.search = newValue
    },
    goBackToPreviousPage () {
      this.$router.go(-1)
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
.v-avatar {
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.3));
}
</style>
