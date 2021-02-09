#!/usr/bin/env bash

cat ./test/create_db.sql | mysql -h127.0.0.1 -umarouatnk -ppassword
cat ./test/mockup_db.sql | mysql -h127.0.0.1 -umarouatnk -ppassword deploy_test