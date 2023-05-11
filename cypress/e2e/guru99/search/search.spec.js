import SearchPage from '../../../pages/guru99/search/search.page'

describe('Search Bar Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it(
    'C123 - Search Bar: Search for random topic and verify no results were found',
    { tags: '@critical' },
    () => {
      SearchPage.verifyPageLoaded()
      SearchPage.openSearchBar()
      SearchPage.verifySearchBarIsDisplayed()
      SearchPage.searchRandomCourse()
      SearchPage.verifyNoResultsFound()
    }
  )
})
