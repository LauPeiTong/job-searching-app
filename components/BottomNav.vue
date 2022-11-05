<template lang="pug">
  v-row.bottom-nav.bottom-column-content-area(no-gutters)
    v-col.flex.col5-custom.bottom-nav--col.px-0.mx-0(
      v-for="menu in menus"
      :key="`nav-${menu.name}`"
    )
      w-button.bottom-nav--button(
        :label="menu.label"
        plain
        tile
        block
        :color="getButtonColor(menu.name)"
        :icon-name="checkRoute(menu.name) ? menu.iconFill : menu.icon"
        :icon-fill="getButtonColor(menu.name)"
        @click="goToPath(menu)"
      )
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import WButton from './componenets-custom/WButton.vue'

export default {
  name: 'BottomNav',
  components: { WButton },
  data () {
    return {
      menus: [
        {
          label: 'Job',
          path: '/job',
          name: 'job',
          icon: 'briefcase-outline',
          iconFill: 'briefcase'
        },
        {
          label: 'Course',
          path: '/course',
          name: 'course',
          icon: 'file-text-outline',
          iconFill: 'file-text'
        },
        {
          label: 'Forum',
          path: '/forum',
          name: 'forum',
          icon: 'globe-2-outline',
          iconFill: 'globe-2'
        },
        {
          label: 'Message',
          path: '/message',
          name: 'message',
          icon: 'message-square-outline',
          iconFill: 'message-square'
        },
        {
          label: 'Account',
          path: '/account',
          name: 'account',
          icon: 'person-outline',
          iconFill: 'person'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      currentPath: 'path/getCurrentPath',
    }),
    currentRouteName () {
      for (const menu of this.menus) {
        if (menu.name === this.$route.name) {
          return menu.name
        }
      }
      return this.currentPath
    }
  },
  methods: {
    ...mapActions({
      changeCurrentPath: 'path/changeCurrentPath'
    }),
    getButtonColor (routeName) {
      return this.currentRouteName === routeName
        ? this.$vuetify.theme.themes.light.primary
        : this.$vuetify.theme.themes.light.secondary
    },
    checkRoute (routeName) {
      return this.currentRouteName === routeName
    },
    goToPath (menu) {
      this.changeCurrentPath(menu.name)
      this.$router.push({
        path: menu.path
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.v-btn--active {
  background-color: transparent;
}

.v-btn:not(.v-btn--round).v-size--default {
  padding: 0px !important;
}

.bottom-nav {
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 100;
}

.bottom-column-content-area {
  border-width: 1px 0 0 0;
  border-color: rgba(193, 193, 193, 0.25);
  border-style: solid;
  background-color: white;
}

.flex.col5-custom {
  width: 20%;
  max-width: 20%;
  flex-basis: 20%;
}
</style>
