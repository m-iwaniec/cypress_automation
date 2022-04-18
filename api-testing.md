There are mainly 4 types of API Testing methods:

1. **GET** – used to extract information from the given server using a given URI. While using GET request, it should only extract data and should have no other effect on the data
2. **POST** – used to create a new entity. It can also be used to send data to the server, for example, customer information, file upload, etc. using HTML forms
3. **PUT** – create a new entity or update an existing one
4. **DELETE**– removes all current representations of the target resource given by a URI


- GET:
<br> - **cy.request()** - makes a GET request to the specified URL
<br> - **cy.request('GET', '/users')** - makes a GET request to the specified URL
<br> - **cy.request('GET', '/users', {name: 'Jane'})** - makes a GET request to the specified URL with the specified data
<br> - **cy.request('GET', '/users', {name: 'Jane'}).then(function(response){})** - makes a GET request to the specified URL with the specified data and then executes the callback function

- POST:
<br> - **cy.request('POST', '/users', {name: 'Jane'})** - makes a POST request to the specified URL with the specified data
<br> - **cy.request('POST', '/users', {name: 'Jane'}).then(function(response){})** - makes a POST request to the specified URL with the specified data and then executes the callback function

- DELETE:
<br> - **cy.request('DELETE', '/users/1')** - makes a DELETE request to the specified URL
<br> - **cy.request('DELETE', '/users/1').then(function(response){})** - makes a DELETE request to the specified URL and then executes the callback function

- PUT:
<br> - **cy.request('PUT', '/users/1', {name: 'Jane'})** - makes a PUT request to the specified URL with the specified data
<br> - **cy.request('PUT', '/users/1', {name: 'Jane'}).then(function(response){})** - makes a PUT request to the specified URL with the specified data and then executes the callback function
- cy.request() - makes a GET request to the specified URL


<br> API testing requires an application to interact with sample API for testing. To test an API, you require two things:
- Testing Tool/Framework to drive the API
- Writing down your own code to test the sample REST API

<br> Rest API test cases can be tested with tools like:
- Advanced REST Client
- Postman-REST Client
- curl in Linux

