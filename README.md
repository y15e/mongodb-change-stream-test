# MongoDB Change Stream Test

## Notes 

> The $changeStream stage is only supported on replica sets

- On Arch Linux, mongod is run from `/usr/lib/systemd/system/mongodb.service`

- Add following lines in `/etc/mongodb.conf` and restart mongodb.
```
replication:
  replSetName: set0
```

- Check replication status with `rs.status()` command in mongo shell.
