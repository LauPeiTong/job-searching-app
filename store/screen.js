  export const state = () => ({
  })
  
  export const getters = {
    getScrollClass (state) {
      console.log(window.innerHeight - 165)
      return {
        height: `${window.innerHeight - 150}px`
      }
    },
    getScrollXClass (state) {
      return {
        width: `${window.innerWidth - 2}px`
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
  