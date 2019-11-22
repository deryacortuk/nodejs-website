# A RESTful Api With Node.js And Express.Js

## Express
![enter image description here](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)
Fast, unopinionated, minimalist web framework for [node](http://nodejs.org/).
Serving up websites and JSON data is easy with Express.

To get started, add Express to your project. 

    $ npm install express

>  const  express  =  require('express')
> 
> const  app  =  express()
> 
> app.get('/',   (req,  res) => {
> 
>  res.send('Hello World')
> 
> })
> app.listen(3000)


The code above uses app.get to set up a handler for an HTTP GET request. The first argument is the path to set up the handler for. The second argument is the function to run when that path is visited. Calling res.send in the route handler allows you to send back a message as the response.  The last thing to do is start the server. This is done by calling app.listen with the port you want to listen on. 

**HTML and JSON**
 Using res.send, you can send back more than just text. res.send can be used to send an HTML or JSON response. The root route below sends back some HTML to be rendered in the browser. This project route below sends back a JSON response. 
 
  **Dynamic Pages with Templating Engine**
Express supports templating engines that allow you to render dynamic HTML pages. 
Start by installing Handlebars in your project. 

> npm i hbs

Firstly, you need to use app.set to set a value for the 'view engine' config option. 

> app.set('view engine', 'hbs')

**Query Strings** 
The query string is a portion of the URL that allows you to provide additional information to the server. For this application, the query string will be used to pass the address from the browser to the Node.js Express application. 

 **Browser HTTP Requests with Fetch** 
 Web APIs provide you with a way to make HTTP requests from JavaScript in the browser. This is done using the fetch function. fetch expects to be called with the URL as the first argument. It sends off the HTTP request and gives you back the response. 
 
 Document Links:
 
 [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
 
 [Fetch Tutorial](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)

**Rendering Dynamic textContent**
Set up HTML elements for the messages you want to render. Below is an example paragraph which can be used to render some text from JavaScript. It contains no text by default. It will be updated to show some text as the client-side JavaScript runs. 

    <p id="message-1"></p>
  The code below can be used to change the text content of the paragraph. First up, document.querySelector is used to target the element. It’s used with #, which searches for elements by their ID. The text content can be updated by setting a value on the textContent property. 

  

> const messageOne = document.querySelector('#message-1')   
> messageOne.textContent = 'My new text'


 
