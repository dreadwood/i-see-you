export const StrapiConfig = {
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
