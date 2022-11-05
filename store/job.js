export const state = () => ({
  selectedCategory: null,
  selectedJob: null,
  categories: [
    {id: 1, name: 'Family-friendly', new_job: 54},
    {id: 2, name: 'Female-friendly', new_job: 22},
    {id: 3, name: 'Internship', new_job: 33},
    {id: 4, name: 'Part-time', new_job: 23},
    {id: 5, name: 'Full-time', new_job: 26},
    {id: 6, name: 'IT', new_job: 16},
    {id: 7, name: 'Accounting', new_job: 71},
    {id: 8, name: 'Art & Design', new_job: 54}
  ],
  jobs: [
    {id: 1, name: 'Frontend Developer Intern', cid: [2, 3, 6], salary: 'MYR 750 - 1000', company: 1},
    {id: 2, name: 'Accountant', cid: [1, 2, 5, 7], salary: 'MYR 3000 - 3500', company: 2},
    {id: 3, name: 'UI/UX designer', cid: [2, 5, 6, 8], salary: 'MYR 4500', company: 3},
    {id: 4, name: 'Game Developer', cid: [5, 6], salary: 'MYR 5000-6000', company: 4},
    {id: 5, name: 'Backend Developer Intern', cid: [2, 3, 6], salary: 'MYR 750 - 1000', company: 1},
    {id: 6, name: 'Frontend Developer', cid: [1, 2, 5], salary: 'MYR 750 - 1000', company: 2},
    {id: 7, name: 'Frontend Developer Freelancar', cid: [2, 4, 6], salary: 'MYR 750 - 1000', company: 3},
    {id: 8, name: 'Frontend Developer Intern', cid: [2, 3, 6], salary: 'MYR 750 - 1000', company: 4},
    {id: 9, name: 'Frontend Developer', cid: [2, 5, 6], salary: 'MYR 4000 - 5000', company: 1},
    {id: 10, name: 'Backend Developer', cid: [2, 5, 6], salary: 'MYR 4000 - 5000', company: 1},
    {id: 11, name: 'Senior Frontend Developer', cid: [2, 5, 6], salary: 'MYR 6000 - 7000', company: 1},
    {id: 12, name: 'Senior Backend Developer', cid: [2, 5, 6], salary: 'MYR 5000 - 7000', company: 1},
    {id: 13, name: 'Full-stack Developer', cid: [2, 5, 6], salary: 'MYR 4000 - 5000', company: 1},
    {id: 14, name: 'UI/UX Developer', cid: [2, 5, 6], salary: 'MYR 4000 - 5000', company: 1},
    {id: 15, name: 'Project Manager', cid: [2, 5, 6], salary: 'MYR 7000 - 10000', company: 1},
    {id: 16, name: 'Junior Frontend Developer', cid: [2, 5, 6], salary: 'MYR 4000 - 5000', company: 1},
    {id: 17, name: 'Web Developer Intern', cid: [2, 3, 6], salary: 'MYR 6000', company: 4},
    {id: 18, name: 'Game Developer Freelancer', cid: [1, 4, 5, 6], salary: 'MYR 5000', company: 2},
    {id: 19, name: 'Accountant', cid: [1, 2, 5, 7], salary: 'MYR 4000 - 5000', company: 2},
    {id: 20, name: 'Mobile App Developer', cid: [1, 2, 5, 6], salary: 'MYR 7500 - 8000', company: 2},
    {id: 21, name: 'Game Development Designer', cid: [5, 8], salary: 'MYR 7500 - 8000', company: 2},
    {id: 22, name: 'Accountant', cid: [1, 2, 5, 7], salary: 'MYR 7500 - 8000', company: 2},
    {id: 23, name: 'Frontend Developer', cid: [1, 2, 5], salary: 'MYR 750 - 1000', company: 2},
  ],
  companies: [
    {id: 1, name: 'Yezza Sdn Bhd', location: 'Putrajaya, Selangor', img: 'yezza', verified: true},
    {id: 2, name: 'FinCare Sdn Bhd', location: 'Cheras, Kuala Lumpur', img: 'fincare', verified: false},
    {id: 3, name: 'EvoSports Sdn Bhd', location: 'Putrajaya, Selangor', img: 'evosports', verified: true},
    {id: 4, name: 'FreshBox Sdn Bhd', location: 'Kuala Lumpur', img: 'freshbox', verified: true}
  ]
})

export const getters = {
  getCategories (state) {
    return state.categories
  },
  getRecommededJob (state) {
    const j = state.jobs.filter((job) => {
      return job.id % 3 === 0
    })
    return j
  },
  getCompanies (state) {
    return state.companies
  },
  getSelectedCategory (state) {
    return state.selectedCategory
  },
  getJobs (state) {
    return state.jobs.filter((job) => {
      return job.cid.includes(state.selectedCategory.id)
    })
  },
  getSelectedJob (state) {
    return state.selectedJob
  },
  getCompany (state) {
    return state.companies.find((company) => {
      return company.id === state.selectedJob.company
    })
  }
}

export const mutations = {
  updateSelectedCategory (state, category) {
    state.selectedCategory = category
  },
  updateSelectedJob (state, job) {
    state.selectedJob = job
  }
}

export const actions = {
  changeSelectedCategory ({ commit, state }, category) {
    commit('updateSelectedCategory', category)
  },
  changeSelectedJob ({ commit, state }, job) {
    commit('updateSelectedJob', job)
  }
}
