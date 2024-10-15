export type FileMediaStrapi = {
  name: string
  alternativeText: string | null
  caption: string | null
  width: number | null
  height: number | null
  formats: any
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: string | null
  provider: string
  provider_metadata: string | null
  createdAt: string
  updatedAt: string
}

export type FileObj = {
  data: {
    attributes: FileMediaStrapi
  } | null
}

export type MultiFileObj = {
  attributes: FileMediaStrapi
}

export type Pagination = {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

export type Meta = {
  pagination: Pagination
}

export type BorderListItem = {
  id: number
  icon: string
  text: string
  colorText: string
}

export type TextList = {
  id: number
  item: string
}

export type PeopleList = {
  id: number
  photo: FileObj
  video: FileObj
  label?: string
}

export type WaveList = {
  id: number
  name: string
  period: string
  time: string
  active?: boolean
}

export type ProgramList = {
  id: number
  item: string
}

export type Field = {
  id: number
  placeholder?: string
  type: 'text' | 'email' | 'tel'
  isRequired?: boolean
  isExist: boolean
}

export type CommonLink = {
  id: number
  label: string
  url: string
  isExist: boolean
  icon: 'youtube' | 'telegram' | 'instagram' | 'facebook' | 'vk' | 'email'
}

export type StrapiData = {
  data: {
    attributes: {
      [key: string]: any
    }
  }
}

export type SectionConfig = {
  params: string
  name: string
}

export type HeroSection = {
  id: number
  title: string
  text: string
  buttonText: string
  list: BorderListItem[]
}

export type CourseDescriptionSection = {
  id: number
  title: string
  text: string
  highlightedText: string
  posterVideo: FileObj
  video: FileObj
}

export type WhyNeedSection = {
  id: number
  title: string
  buttonText: string
  list: TextList[]
}

export type AboutAuthorSection = {
  id: number
  title: string
  quote: string
  authorQuote: string
  list: TextList[]
  socialLinks: CommonLink[]
  photo: FileObj
}

export type CuratorsSection = {
  id: number
  title: string
  people: PeopleList[]
}

export type ProgramSection = {
  id: number
  title: string
  waves: WaveList[]
}

export type ProgramListSection = {
  id: number
  name: string
  list: ProgramList[]
}

export type FeedbackSection = {
  id: number
  title: string
  people: PeopleList[]
}

export type AboutCourseSection = {
  id: number
  title: string
  list: TextList[]
}

export type RegistrationSection = {
  id: number
  cost: string
  costText: string
  formTitle: string
  formText?: string
  formTextButton: string
  formSuccessfulMsg: string
  nameField: Field
  emailField: Field
  telField: Field
  telegramField: Field
}

export type FooterSection = {
  id: number
  text: string
  copyrightDate: string
  socialLinks: CommonLink[]
  contactLinks: CommonLink[]
  textLinks: CommonLink[]
}

export type ClientData = {
  name: string
  email?: string
  tel?: string
  telegram?: string
}

export type IArticleBlog = {
  previewTitle: string
  previewText: string
  previewImage: FileObj
  articleTitle: string
  firstText: string
  articlePosterVideo: FileObj
  articleVideo: FileObj
  articleVideoWidth: number | null
  secondText?: string
  articleImages?: {
    data: MultiFileObj[]
    meta: Meta
  }
  thirdText?: string
  author?: string
  date: string
  socialCount?: number
  isMainPage: boolean
  url: string
}

export type IArticleBlogWithId = IArticleBlog & { id: number }

export type ArticleRes = {
  id: number
  attributes: IArticleBlog
}

export type ArticleListRes = {
  data: ArticleRes[]
  meta: Meta
}
