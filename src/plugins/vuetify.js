import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { es } from 'vuetify/locale'

export default createVuetify({
  locale: { locale: 'es', messages: { es } },
  icons: { defaultSet: 'mdi', aliases, sets: { mdi } },
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#ee44aa',
          secondary: '#424242',
          accent: '#82b1ff',
          error: '#ff5252',
          info: '#2196f3',
          success: '#4caf50',
          warning: '#ffc107',
          background: '#fafafa',
          color1: '#86bbd8',
          color2: '#084c61',
          color3: '#595959',
          color4: '#121420',
          color5: '#cfcfea',
        },
      },
    },
  },
})
