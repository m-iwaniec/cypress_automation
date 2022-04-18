<font size="5">

Best practices in building a cypress framework:
1. Setting up test hooks
- cypress provides hooks (borrowed from Mocha)

- beforeEach (before each test case (it)), afterEach (test case), before (once, before all tests), after (once, after all tests)

- helpful to set conditions that you want to run before a set of tests or before each test. They're also helpful to clean up conditions after a set of tests or after each test

- https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Hooks

2. Data driven testing with fixtures
- inside hooks can be put *fixtures* (fixed set of data located in a file - e.g. /fixtures/example.json)
- cy.fixture('filename') - must resolve the promise manually
- while using fixtures, you can use global variables (*this.something*)
<br> e.g. cy.get('select').select(*this.data.gender*)

3. Building custom cypress commands
- custom commands should be added to /support/commands.js

4. Parameterise tests with multipile datasets
- by using fixtures (e.g.variable "productName": ["Blackberry", "Nokia Edge", "iphone", "Samsung"])

5. Test debugging
 - cy.pause() and cy.debug()

6. Page object design patterns
- create class -> declare all the page objects, export them -> import, create object for that class (with the import keyword)
- Page objects have two main benefits: 1) They keep all page element selectors in one place. 2) They standardize how tests interact with the page.
- alternative: application actions https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/#final-thoughts

7. Configuration changes in cypress.json
- cypress.json
- https://docs.cypress.io/guides/references/configuration
- to override defaultCommandTimeout, declare the following globally or at a specific line:
<br> Cypress.config('defaultCommandTimeout', 10000)

8. Screenshots and video recording for tests
- cypress dashboard https://docs.cypress.io/guides/guides/recording-and-reproducing-video-and-screenshots.html or command line

9. Cypress dashboard
- it is basically a cloud server
- or Mochawesome plugin:
<br> in cypress.json - "reporter": "mochawesome"
<br> cypress run --reporter mochawesome (mochawesome-report folder)

10. Cypress environment variables
- edit in cypress.json
- e.g. cy.visit(Cypress.env('url'))
- to set env variables through the command line:
<br> ./node_modules/.bin/cypress run --spec cypress/integration/project1/test11.spec.js --env url="https://www.google.com/" --headed
- scripts in package.json (e.g. scripts: "test": "./node_modules/.bin/cypress run" -> npm run test)

11. Generating excellent reports for test exectution results
- Mochawesome reports

12. Integrate cypress tests with Jenkins CI
- https://docs.cypress.io/guides/guides/jenkins.html

</font>