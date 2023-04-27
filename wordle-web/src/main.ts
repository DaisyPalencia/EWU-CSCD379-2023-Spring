import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { mdi } from 'vuetify/iconsets/mdi'

import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    sets: {
      mdi
    }
<<<<<<< HEAD
=======
  },
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          correct: '#4CAF50',
          misplaced: '#FFC107',
          wrong: '#F44336'
        }
      },
      inverse: {
        colors: {
          correct: '#F44336',
          misplaced: '#FFC107',
          wrong: '#4CAF50'
        }
      }
    }
>>>>>>> 03905a7ee3d5a26c6179f585a67005e7a7bc9785
  }
})

const app = createApp(App)

app.use(vuetify)

app.use(router)

app.mount('#app')
