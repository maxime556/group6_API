#!/usr/bin/env bash

cat ./test/create_db.sql | mysql -h127.0.0.1 -u marouatnk -p password
cat ./test/mockup_db.sql | mysql -h127.0.0.1 -u marouatnk -p password deploy_test