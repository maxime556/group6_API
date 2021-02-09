#!/usr/bin/env bash

cat ./test/create_db.sql | mysql -h127.0.0.1 -umarouatnk -ptest1
cat ./test/mockup_db.sql | mysql -h127.0.0.1 -umarouatnk -ptest1 deploy_test