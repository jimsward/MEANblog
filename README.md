Blog project for M101JS
Extended by Jim Sward to include :
Removed Swig templates; client is now all angularjs
Added date field to comments,
Admin for approving comments,
Text editor for new posts,
Contact page; saves to mongodb and sends email to admin,
Separate password only admin area,


./app.js - entry point
./package.json - npm package description
./routes/ - Application routes
./posts.js - Posts Data Access Helper
./sessions.js - Sessions Data Access Helper
./users.js - Users Data Access Helper
./views/ - html templates

Getting started

npm install
node app.js
