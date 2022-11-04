<template lang="pug">
  v-btn.woreer-icon(icon :color="buttonColor" :width="width" :height="height" :to="to" )
    client-only
      eva-icon(:name="iconName" :fill="iconFill" @click="emitClick" :width="width" :height="height")
</template>
<script>
export default {
  name: 'WIcon',
  props: {
    iconName: {
      type: String,
      default: null
    },
    iconFill: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 24
    },
    height: {
      type: Number,
      default: 24
    },
    to: {
      type: String,
      default: null
    }
  },
  computed: {
    buttonColor () {
      let color = this.iconFill

      if (this.color) { color = this.color }
      if (this.disabled) { color = 'darkGrey' }

      return color
    }
  },
  methods: {
    emitClick () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
:deep(.btn-icon) {
  display: flex;
  width: 0.8rem;
  margin-right: 0.5rem;
}

.theme--light.v-btn.v-btn--disabled.v-btn--has-bg {
  background-color: #848484 !important;
  color: #C1C1C1 !important;
}

:deep(.v-btn__content) {
  opacity: 1 !important;
  letter-spacing: -0.011em;
}
</style>
