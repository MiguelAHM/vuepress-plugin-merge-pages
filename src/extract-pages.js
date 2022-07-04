const crossPathSort = require('cross-path-sort')
const logger = require('./logger')
const extractPages = context => {
  const { pages: original = [] } = context

  const pages = original.map(page => {
    logger.wait('extracting files')
    logger.wait(page._content)
    return {
      content: page._content,
      path: page.path
    }
  })

  return crossPathSort.sort(pages, { pathKey: 'path' })
}

module.exports = extractPages
