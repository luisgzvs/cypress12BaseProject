class GraphQLEditorPage {
  get editorPanel() {
    return 'div .graphiql-query-editor'
  }

  get editorPanelExecuteBtn() {
    return 'div .graphiql-execute-button'
  }

  get resultsWindow() {
    return 'div .result-window'
  }

  verifyPageLoaded() {
    cy.get(this.editorPanel).should('exist').and('be.visible')
    cy.get(this.resultsWindow).should('exist').and('be.visible')
    cy.get(this.editorPanelExecuteBtn).should('exist').and('be.visible')
  }

  executeQuey(operationName, body) {
    cy.get('.cm-keyword + span').type(` ${operationName}`)
    cy.get('[role="presentation"] span span')
      .eq(5)
      .type(body, { parseSpecialCharSequences: false })
    cy.get(':nth-child(10) > .CodeMirror-line').click()
    cy.get(':nth-child(10) > .CodeMirror-line').type('{backspace}')
    cy.get(this.editorPanelExecuteBtn).click()
  }

  verifyQueryResults(characterName) {
    cy.get(`span:contains(${characterName})`).should('be.visible')
  }
}

export default new GraphQLEditorPage()
