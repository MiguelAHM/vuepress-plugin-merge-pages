const crossPathSort = require('cross-path-sort')

const extractPages = context => {
  const { pages: original = [] } = context

  const pages = original.map(page => {
    logger.wait(page._content)
    return {
      content: page._content,
      path: page.path
    }
  })

  return crossPathSort.sort(pages, { pathKey: 'path' })
}

module.exports = extractPages
