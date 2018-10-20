const I18N = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      file: 'en/index.js'
    },
    {
      code: 'es',
      iso: 'es-ES',
      name: 'Español',
      file: 'es/index.js'
    }
  ],
  lazy: true,
  langDir: '/locales/',
  defaultLocale: 'en',
  parsePages: false,
  pages: {
    'work/_slug': {
      es: '/trabajo/:slug'
    }
  }
}

module.exports = {
  I18N
}