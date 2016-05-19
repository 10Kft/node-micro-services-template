_Like all software, this is a work in progress_

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

> `OPEN-ISSUE:` The current least hacky solution for getting local npm modules path (above) means that you must run all these from within the same directory as the parent of your local `npm_modules` dir. IOW, if you have the same modules in your global npm cache and you run a command from a directory within your project other than this specific location, your shell will use the global version of that binary. There isn't a lot we can do at this point besides keeping this in mind.

# Project Structure

```
./node-micro-services-template
 |
 |-- config
 |-- db
 |-- lib
 |-- services
 |-- scripts
 |-- spec
 |-- logs
```

**config** — All application configuration files live under this directory. The `config/env` sub directory will contain a set of hierarchical configuration files in YAML format (JSON also supported).

**db** — Database models shared by the services in this project.

**lib** — Libraries shared by the services in this project.

**services** — A sub directory per each service implemented by this project. The simplest form will contain at least one service.

> `OPEN-ISSUE` Need to document the structure inside a typical service.

**scripts** — Scripts that are part of the template. 

**spec** — BDD or other tests.

**logs** — Runtime logs.

# Conventions

Following are a set of conventions to help make the project easier to navigate, read and understand.


_coming soon_
