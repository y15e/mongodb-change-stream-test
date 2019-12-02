# MongoDB Change Stream Test

## Notes 

> The $changeStream stage is only supported on replica sets

- On Arch Linux, mongod is run from `/usr/lib/systemd/system/mongodb.service`

- Add following lines in `/etc/mongodb.conf` and restart mongodb.
```
replication:
  replSetName: set0
```

- Run `rs.initiate()` in mongo shell.

- Check replication status with `rs.status()` command in mongo shell.

```
$ sudo mkdir /var/lib/mongodb-rs0-0
$ sudo chown mongodb:daemon /var/lib/mongodb-rs0-0
$ sudo mongodb --replSet rs0 --dbpath /var/lib/mongodb-rs0-0 --port 27018
```
- Run `rs.add('127.0.0.1:27018')` in mongo shell.
