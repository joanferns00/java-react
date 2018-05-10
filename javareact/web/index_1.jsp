<%-- 
    Document   : index
    Created on : Apr 14, 2018, 4:28:29 PM
    Author     : Cheryl
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        
        <div id="container"></div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.4.2/react-dom.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.21.1/babel.min.js"></script>

        <script type = "text/babel">
            var Greeting = React.createClass({
            render: function() {
            return( 
                <div>    
                <p> Hello World from Greeting 123 </p>
                    <form action='welcome' method='post'>
                        Enter your name: 
                        <input type="text" name="user" />
                        <input type="submit" value="Submit" />                
                    </form>
                </div>
                )
            }
            });
            ReactDOM.render(
            <Greeting/>  ,
            document.getElementById('container'))
        </script>
    </body>
</html>
