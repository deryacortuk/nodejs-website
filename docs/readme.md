# A RESTful Api With Node.js And Express.Js

![enter image description here](https://i.cloudup.com/zfY6lL7eFa-3000x3000.png)

Fast, unopinionated, minimalist web framework for [node](http://nodejs.org/).

Serving up websites and JSON data is easy with Express.

To get started, add Express to your project. 

    $ npm install express

>  const  express  =  require('express')
> 
> const  app  =  express()

> const port = process.env.PORT || 3000
> 
> app.get('/',   (req,  res) => {
> 
>  res.send('Hello World')
> 
> })

> app.listen(port)


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


## HEROKU
![enter image description here](https://miro.medium.com/max/1710/1*H_nSB0PYTzIxnG9GhNU5vg.jpeg)
Heroku is a cloud platform as a service (PaaS) that lets companies build, deliver, monitor, and scale apps. In addition to being designed as a container-based cloud PaaS, Heroku also supports a number of widely used programming languages. Heroku supports the **Ruby, Node.js, Python, Java, Go, PHP,** and **Scala** programming languages. This provides easy deployment of existing technologies on Heroku with minimum modifications needed.
Heroku is designed as a container-based PaaS. As a logical packing mechanism, containers enable developers to keep the applications independent of their deployment environment.



-   Runs your application across a preset number of  **virtual servers**.
-   **Manages releases**  by rolling out your application to different environments.
-   Ensures your application  **automatically recovers**  from server failures.
-   Handles  **load balancing**  across many application instances, allowing you to instantly scale your application to support millions of users.
-   Allows you to quickly  **add and remove infrastructure blocks**  like caching servers and database servers.




### Heroku architectural principles


Based on Heroku founder Adam Wiggen’s  [Twelve Factor App](https://12factor.net/), you should ideally keep these considerations in mind when designing your Heroku deployments (or, for that matter, any deployments):

-   Version control and store your application in Git.
-   Declare and isolate dependencies.
-   Store your application configuration profile data in environment variables.
-   Design infrastructure elements to work as attachable modular resources.
-   Separate your build and run stages.
-   Design your application to be stateless so it can be easily reused.
-   Export services via port bindings
-   Scale-out your application using concurrency
-   Keep your development, staging, and production images as similar as possible.
-   Think of your logs as event streams.
-   Run admin processes as one-off tasks.



**Here are pros/benefits of using Heroku:**

-   Allows the developer to focus on code instead of infrastructure
-   Enhance the productivity of cloud app development team
-   Offers single billing for all projects broken down by team
-   Monitor and enhance performance though rich application monitoring
-   Helps your development, QA, and business stakeholders create a unified dashboard.
-   Support form Modern Open Source Languages
-   High-performance Salesforce integration
-   Simple Horizontal & Vertical Scalability
-   Heroku operation and security team is instantly ready to help you 24/7
-   Leading Platform tools and Services Ecosystem
-   Helps you to focus on innovation, not operations
-   The Heroku Enterprise architecture offers minimal or no downtime during the system updates.
-   Fast application lifecycle management and permissions
-   Allows you to remove friction from the development
-   Offers a powerful dashboard and CLI
-   Integrates with familiar developer workflows
-   Predictability and insight into the cost of application development and maintenance
-   A bunch of supportive tools
-   Beginner and startup-friendly
-   It allows you to create a new server in just 10 seconds by using the interface of Heroku Command Line.
-   This cloud computing platform takes care of patching systems and keeping everything healthy.
-   A range of automated functionalities including the scaling, configuration, setup, and others
-   Easy integration with other AWS products
-   Medium learning curve
-   Offers best-in-class Developer Experience
-   Secure connectivity to Salesforce data to build a single view of the customer
-   Flexibility to customize and support unique DevOps workflow needs


Document Links:

[HEROKU](https://www.heroku.com/what#a-focus-on-apps)

[Heroku architectural](https://cloudacademy.com/blog/what-is-heroku/)

[Heroku Tutorial](https://www.guru99.com/heroku-vs-aws.html)
 
