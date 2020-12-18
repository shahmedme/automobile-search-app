# Car Shop

Find best car deals and buy easily.

## Proedure to run this

This project is made with JavaScript stack. For frontend I used React, React Hooks, Redux, Axios, React Router, Bootstrap etc. And for backend I used express.js, TypeScript, MongoDB, Mongoose etc.

It has full CRUD API in backend.

Frontend and Backend has separate directory.

### Setup Backend API Server

- To run API server we need to run `npm install` at the root directory
- Then run `npm run dev`
- To run API server successfully you must have TypeScript installed
- API server used MongoDB as database. You must have MongoDB setup or use MongoDB Atlas with `DB_STRING` environment variable
- To use environment variable create a new `.env` file and use the content of `.env-example` file.

### Setup Client

- To setup client we need to run `cd client && npm install`
- Then run `npm start`

### Usage

- Landing page have a search bar. Search car by brand name. Make Sure you added them before searching, otherwise no result will be found.
- You can add new car, update, delete and read also.

_Screenshot are added to the `screenshot` folder of this repo_
