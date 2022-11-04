export const state = () => ({
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
    {id: 1, name: 'Frontend developer Intern', cid: [2, 3, 6], salary: 'RM 750 - 1000', company: 1},
    {id: 5, name: 'Backend developer Intern', cid: [2, 3, 6], salary: 'RM 750 - 1000', company: 1},
    {id: 9, name: 'Fronted developer', cid: [2, 5, 6], salary: 'RM 4000 - 5000', company: 1},
    {id: 10, name: 'Backend developer', cid: [2, 5, 6], salary: 'RM 4000 - 5000', company: 1},
    {id: 11, name: 'Senior fronted developer', cid: [2, 5, 6], salary: 'RM 6000 - 7000', company: 1},
    {id: 12, name: 'Senior backend developer', cid: [2, 5, 6], salary: 'RM 5000 - 7000', company: 1},
    {id: 13, name: 'Full-stack developer', cid: [2, 5, 6], salary: 'RM 4000 - 5000', company: 1},
    {id: 14, name: 'UI/UX developer', cid: [2, 5, 6, 7], salary: 'RM 4000 - 5000', company: 1},
    {id: 15, name: 'Project Manager', cid: [2, 5, 6], salary: 'RM 7000 - 10000', company: 1},
    {id: 16, name: 'Junior frontend developer', cid: [2, 5, 6], salary: 'RM 4000 - 5000', company: 1},
    {id: 2, name: 'Accountant', cid: [1, 2, 5, 7], salary: 'RM 3000 - 3500', company: 2},
    {id: 6, name: 'Frontend developer', cid: [1, 2, 5, 7], salary: 'RM 750 - 1000', company: 2},
    {id: 10, name: 'Frontend developer', cid: [1, 2, 5, 7], salary: 'RM 750 - 1000', company: 2},
    {id: 3, name: 'UI/UX designer', cid: [2, 5, 6, 8], salary: 'RM 4500', company: 3},
    {id: 7, name: 'Frontend developer Freelancar', cid: [2, 4, 6], salary: 'RM 750 - 1000', company: 3},
    {id: 4, name: 'Game Developer', cid: [5, 6], salary: 'RM 5000-6000', company: 4},
    {id: 8, name: 'Frontend developer Intern', cid: [2, 3, 6], salary: 'RM 750 - 1000', company: 4},
    {id: 17, name: 'Web developer Intern', cid: [2, 3, 6], salary: 'RM 6000', company: 4},
    {id: 18, name: 'Game developer Freelancer', cid: [1, 4, 5, 6], salary: 'RM 5000', company: 2},
    {id: 19, name: 'Accountant', cid: [1, 2, 5, 7], salary: 'RM 4000 - 5000', company: 2},
    {id: 20, name: 'Mobile app developer', cid: [1, 2, 5, 6], salary: 'RM 7500 - 8000', company: 2},
    {id: 21, name: 'Game Designer', cid: [1, 4, 5, 8], salary: 'RM 7500 - 8000', company: 2},
    {id: 22, name: 'Accountant', cid: [1, 2, 5, 7], salary: 'RM 7500 - 8000', company: 2},
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
  }
}

export const mutations = {
}

export const actions = {
}
