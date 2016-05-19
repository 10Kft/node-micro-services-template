# node micro services template

How to run this project,

* git clone
* cd into project directory
* npm install
* npm start
* navigate to http://localhost:8002

To stop services,

* npm stop

To run tests,

* npm test

Ensure local `npm` bin is in PATH

* Edit your ~/.bashrc and append `export PATH=./node_modules/.bin:$PATH # Add local node_module to PATH` to it
* Reload environment `. ~/.bashrc`

At this point, *pm2* is in your path and you can use any pm2 commands to manage your processes. For example,

* To view logs, run `pm2 logs`
* To view status of running processes, run `pm2 status`

`OPEN-ISSUE:` The current least hacky solution for getting local npm modules path (above) means that you must run all these from within the same directory as the parent of your local `npm_modules` dir. IOW, if you have the same modules in your global npm cache and you run a command from a directory within your project other than this specific location, your shell will use the global version of that binary. There isn't a lot we can do at this point besides keeping this in mind.

_This is a work in progress_
