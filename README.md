If you want to use these codes I suggest to have an .env file that contains port and database url, but before that make sure to install packages by terminal.
```
npm i
```
and after that create a file named .env in the folder that contains server.js file and put the following codes innit.
```
PORT = 3000
MONGO_URL = "mongodb://127.0.0.1:27017/(collection name)""
```
so you have the node_modules folder now. then all you need to do is to run the server.js file using __node server__. You can use one of the following aswell
```
npm start (uses node)
npm run dev (uses nodemon)
```
