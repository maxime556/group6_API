#!/usr/bin/env bash

cat ./test/create_db.sql | mysql -h127.0.0.1 -umarouatnk -password
cat ./test/mockup_db.sql | mysql -h127.0.0.1 -umarouatnk -password deploy_test