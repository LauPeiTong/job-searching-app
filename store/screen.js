  export const state = () => ({
  })
  
  export const getters = {
    getScrollClass (state) {
      return {
        height: `${window.innerHeight - 165}px`
      }
    },
    getScrollXClass (state) {
      return {
        width: `${window.innerWidth - 16}px`
      }
    },
    getWidthClass (state) {
      return {
        'min-width': `${window.innerWidth - 42}px`
      }
    }
  }

  export const mutations = {
  }
  
  export const actions = {
  }
  