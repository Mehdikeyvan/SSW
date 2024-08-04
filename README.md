If you want to use these codes I suggest to have an .env file that contains port and database url, something like this
```
PORT = 3000
MONGO_URL = "mongodb://127.0.0.1:27017/(collection name)""
```
and before that make sure to run this command in your terminal 
```
npm i
```
so you have the node_modules folder. then all you need to do is to run the server.js file using **node server**. You can use one of the following aswell
```
npm start (uses node)
npm run dev (uses nodemon)
```
