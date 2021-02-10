#!/usr/bin/env bash

mkdir -p dist
cp ./package.json dist/package.json
cp ./package-lock.json dist/package-lock.json
cp .env dist/.env