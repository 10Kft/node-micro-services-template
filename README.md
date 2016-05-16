# node micro services template

How to run this project,

* git clone
* cd into project directory
* npm install
* npm start
* navigate to http://localhost:8001

To stop services,

* npm stop

To view logs,

* npm run logs

# deployment

We have chosen capistrano as a default deployment mechnism for this project. See,

* https://github.com/capistrano/capistrano and
* https://github.com/capistrano/capistrano-npm

for more information.

To install capistrano, first read https://github.com/capistrano/capistrano#quick-start

* you need a version of ruby on your local server (but not on the target hosts being deployed to)
* `gem install capistrano`
* `gem install capistrano-npm`

Then,

* cd into project directory
* Run `cap -T` to view available deployment tasks.

_This is a work in progress_