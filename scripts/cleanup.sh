#!/bin/bash

read -p "This will remove all loaded node_modules. Are you sure? " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
  # find and remove all installed node modules
  find . -name 'node_modules' -type d | xargs rm -rf
fi


