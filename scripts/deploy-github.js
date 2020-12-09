const ghpages = require('gh-pages')// replace with your repo url

ghpages.publish(
  'public',
  {
    branch: 'master',
    repo: 'https://koa-capital.github.io/gatsby-koa-capital/'
  },
  () => {
    console.log('Deploy Complete!')
  }
)
