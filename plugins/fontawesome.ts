
// eslint-disable-next-line import/named
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  faGithub,
  faGoogleDrive,
  faFigma,
} from '@fortawesome/free-brands-svg-icons'

import {
  faXmark,
  faChevronCircleUp,
  faChevronUp,
  faPlus,
  faMinus,
  faHeart,
  faChevronLeft,
  faMoneyBill,
  faHashtag,
} from '@fortawesome/free-solid-svg-icons'

const icons = [
  faXmark,
  faChevronCircleUp,
  faChevronUp,
  faPlus,
  faMinus,
  faGithub,
  faHeart,
  faChevronLeft,
  faGoogleDrive,
  faFigma,
  faMoneyBill,
  faHashtag,
]
library.add(...icons)

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
