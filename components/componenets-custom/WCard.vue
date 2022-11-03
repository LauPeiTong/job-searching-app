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
          eva-icon(:name="cornerIcon" :fill="$vuetify.theme.themes.light.brown" height="32" width="32")
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
  computed: {
  },
  methods: {
    emitClick () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>

</style>
