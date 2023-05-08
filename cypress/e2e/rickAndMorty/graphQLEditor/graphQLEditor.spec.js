import { aliasQuery, aliasMutation } from '../../../utils/graphql-test-utils'
import GraphQLEditorPage from '../../../pages/rickAndMorty/graphQLEditor/graphQLEditor.page'

describe('Search Bar Test', () => {
  let queries
  let charactersQueryData

  beforeEach(() => {
    cy.fixture('queries').then(query => {
      queries = query
    })

    cy.intercept('POST', 'https://rickandmortyapi.graphcdn.app/', req => {
      // Queries
      aliasQuery(req, 'getCharacters')
    })
  })

  it('C456 - Get Characters API Test', () => {
    charactersQueryData = queries.GetCharacters
    cy.graphQLRequest(
      charactersQueryData.operationName,
      charactersQueryData.query,
      charactersQueryData.variables
    )
      .its('body.data.characters.results')
      .then(resp => {
        expect(resp[0].name).to.have.string('Mechanical Rick')
      })
  })

  it.only('C789 - Make a character request and verify results', () => {
    charactersQueryData = queries.GetCharacters
    cy.visit('/graphql')
    GraphQLEditorPage.verifyPageLoaded()
    GraphQLEditorPage.executeQuey(
      charactersQueryData.operationName,
      charactersQueryData.body
    )
    cy.wait('@gqlgetCharactersQuery')
      .its('response')
      .then(resp => {
        expect(resp.statusCode).to.eq(200)
        const characters = resp.body.data.characters.results
        GraphQLEditorPage.verifyQueryResults(characters[0].name) //you can do as many assertions as you want with this data
      })
  })
})
