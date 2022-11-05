export const state = () => ({
    selectedCourse: null,
    courses: [
      {id: 1, name: 'Interview Training 101', company: 1, permium: true, taken: true, completed: false, total_level: 5, completed_level: 1},
      {id: 2, name: 'Leadership Training', company: 1, permium: true, taken: true, completed: false, total_level: 5, completed_level: 1},
      {id: 3, name: 'Interview Training 202', company: 1, permium: true, taken: true, completed: false, total_level: 5, completed_level: 1},
      {id: 4, name: 'English Communication 1', company: 1, permium: true, taken: true, completed: false, total_level: 5, completed_level: 1},
      {id: 5, name: 'English Communication 2', company: 1, permium: true, taken: true, completed: false, total_level: 5, completed_level: 1},
      {id: 6, name: 'Teamwork Training', company: 1, permium: true, taken: true, completed: false, total_level: 5, completed_level: 1},
      {id: 7, name: 'Interview Training 101', company: 1, permium: true, taken: true, completed: false, total_level: 5, completed_level: 1},
      {id: 8, name: 'Interview Training 101', company: 1, permium: true, taken: true, completed: false, total_level: 5, completed_level: 1},
      {id: 9, name: 'Interview Training 101', company: 1, permium: true, taken: true, completed: false, total_level: 5, completed_level: 1},
      {id: 10, name: 'Interview Training 101', company: 1, permium: true, taken: true, completed: false, total_level: 5, completed_level: 1},
      {id: 11, name: 'Interview Training 101', company: 1, permium: true, taken: true, completed: false, total_level: 5, completed_level: 1},
      {id: 12, name: 'Interview Training 101', company: 1, permium: true, taken: true, completed: false, total_level: 5, completed_level: 1}
    ]
  })
  
  export const getters = {
    getSelectedCourse (state) {
      return state.selectedCourse
    },
    getCourses (state) {
      return state.courses
    },
    getRecommededCourses (state) {
      const c = state.courses.filter((course) => {
        return course.id % 3 === 0
      })
      return c
    },
    getCurrentCourses (state) {
      const c = state.courses.filter((course) => {
        return course.taken === true
      })
      return c
    },
    getRecentCourse (state) {
      return state.courses[0]
    }
  }
  
  export const mutations = {
    updateSelectedCourse (state, course) {
      state.selectedCourse = course
    }
  }
  
  export const actions = {
    changeSelectedCourse ({ commit, state }, courses) {
      commit('updateSelectedCourse', courses)
    }
  }
  