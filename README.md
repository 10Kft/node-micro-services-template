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

To view logs,

* npm run logs

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
