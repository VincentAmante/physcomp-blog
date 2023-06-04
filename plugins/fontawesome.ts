
// eslint-disable-next-line import/named
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  faGithub
} from '@fortawesome/free-brands-svg-icons'

import {
  faXmark,
  faChevronUp,
  faPlus,
  faMinus,
  faHeart,
} from '@fortawesome/free-solid-svg-icons'

const icons = [
  faXmark,
  faChevronUp,
  faPlus,
  faMinus,
  faGithub,
  faHeart,
]
library.add(...icons)

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
