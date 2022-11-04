<template lang="pug">
  v-card.rounded-xl.d-flex.justify-start(
    @click="emitClick();"
    :min-height="height"
    :color="color"
    outlined
    )
    .pa-4
      v-row
        v-col(:cols="10")
          p.mb-0.font-weight-medium.text-h6(:class="color ? 'white--text' : 'secondary--text'") {{ label }}
        v-col.text-right(v-if="cornerIcon" :cols="2")  
          v-btn(icon width='32' height='32')
            client-only
              eva-icon(:name="cornerIconName" :fill="cornerIconColor" @click="emitIconClick")
      p.mb-0.caption.font-weight-regular(:class="color ? 'white--text' : 'secondary--text'") {{ label2 }}
      p.mb-0.caption.font-weight-light(:class="color ? 'white--text' : 'secondary--text'") {{ label3 }}
      slot(name="action")
</template>
<script>
export default {
  name: 'WCard',
  props: {
    label: {
      type: String,
      default: null
    },
    label2: {
      type: String,
      default: null
    },
    label3: {
      type: String,
      default: null
    },
    height: {
      type: Number,
      default: 95
    },
    color: {
      type: String,
      default: null
    },
    cornerIcon: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      isIconClicked: false,
      cornerIconName: this.cornerIcon + '-outline',
      cornerIconColor: '#918679'
    }
  },
  computed: {
  },
  methods: {
    emitClick () {
      this.$emit('click')
    },
    emitIconClick () {
      if (!this.isIconClicked) {
        this.cornerIconColor = `${this.$vuetify.theme.themes.light.primary}`
        this.cornerIconName = this.cornerIcon
        this.isIconClicked = true
      } else {
        this.cornerIconColor = `${this.$vuetify.theme.themes.light.brown}`
        this.cornerIconName = this.cornerIcon + '-outline'
        this.isIconClicked = false
      }
    }
  }
}
</script>

<style scoped>

</style>
