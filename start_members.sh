#!/bin/sh

sudo mongod --replSet rs0 --port 27017 --dbpath /var/lib/mongodb-rs0-0 --syslog &
sudo mongod --replSet rs0 --port 27018 --dbpath /var/lib/mongodb-rs0-1 --syslog &
