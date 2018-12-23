## Node Blog

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://github.com/soundsnick/node-blog)

Just my Node.js development practice.

## Used tools
- Node.js
- Express
- PostgreSQL
- Gulp

## Used Development tools
- Pug `https://pugjs.org/api/getting-started.html`
- Gulp-scss `https://www.npmjs.com/package/gulp-sass`

### Installation
Node Blog requires PostgreSQL to run.
After installing PostgreSQL on your machine run following commands.
```sh
$ psql
$ CREATE TABLE users(id  SERIAL PRIMARY KEY, username VARCHAR(20), password VARCHAR(50));
$ CREATE TABLE posts(id  SERIAL PRIMARY KEY, title VARCHAR(20), content text);
```


Install the dependencies and start the server.

```sh
$ git clone https://github.com/soundsnick/node-blog
$ npm install
$ node index.js
```

## Todos
- Authentication
- Post add/remove/edit actions
- Beautiful frontend


## License
MIT
