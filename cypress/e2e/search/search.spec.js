import SearchPage from '../../pages/search/search.page'

describe('Search Bar Test', () => {

  beforeEach(() =>{
    cy.visit('/')
  })

  it('C123 - Search Bar: Search for random topic and verify no results were found', () => {
    SearchPage.openSearchBar() 
    SearchPage.verifySearchBarIsDisplayed()  
    SearchPage.searchRandomCourse()
    SearchPage.verifyNoResultsFound()   
  })  
})