import { faker } from '@faker-js/faker';

class SearchPage {
    pagePath = '/'

    get searchIcon(){
        return 'span.search-toggle-icon'
    }

    get searchBar() {
        return 'input.search-field'
    }

    get noResultsLabel(){
        return 'div[class*="gs-no-results-result"]'
    }

    openSearchBar(){
        cy.get(this.searchIcon).should('exist').and('be.visible').click()
    }

    verifySearchBarIsDisplayed(){
        cy.get(this.searchBar).should('exist').and('be.visible')
    }

    searchRandomCourse(){
        cy.get(this.searchBar).clear()
        cy.get(this.searchBar).type(faker.lorem.paragraph())
        cy.get(this.searchBar).type('{enter}')
    }

    verifyNoResultsFound(){
        cy.get(this.noResultsLabel).contains('No Results')
    }
}

export default new SearchPage()