export const StrapiPageConfig = {
  hero: {
    params: 'populate[heroSection][populate]=*',
    name: 'heroSection'
  },
  courseDescription: {
    params: 'populate[courseDescriptionSection][populate]=*',
    name: 'courseDescriptionSection'
  },
  whyNeed: {
    params: 'populate[whyNeedSection][populate]=*',
    name: 'whyNeedSection'
  },
  aboutAuthor: {
    params: 'populate[aboutAuthorSection][populate]=*',
    name: 'aboutAuthorSection'
  },
  curators: {
    params: 'populate[curatorsSection][populate][people][populate]=*',
    name: 'curatorsSection'
  },
  program: {
    params: 'populate[programSection][populate][waves][populate]=*',
    name: 'programSection'
  },
  programList: {
    params: 'populate[programListSection][populate][list][populate]=*',
    name: 'programListSection'
  },
  feedback: {
    params: 'populate[feedbackSection][populate][people][populate]=*',
    name: 'feedbackSection'
  },
  aboutCourse: {
    params: 'populate[aboutCourseSection][populate][list][populate]=*',
    name: 'aboutCourseSection'
  },
  registration: {
    params: 'populate[registrationSection][populate]=*',
    name: 'registrationSection'
  },
  footer: {
    params: 'populate[footerSection][populate]=*',
    name: 'footerSection'
  }
}

export const StrapiBlogConfig = {
  populate: {
    params: 'populate=*&filters[isMainPage][$eq]=true&pagination[limit]=3',
    name: ''
  },
  last: {
    params: 'populate=*&pagination[limit]=3&sort[0]=id:desc',
    name: ''
  },
  blog: {
    params: 'populate=*',
    name: ''
  }
} as const
