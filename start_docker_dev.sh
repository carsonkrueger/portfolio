#!/bin/sh
export CACHEBUST=$(date +%s)
docker-compose up -d --build portfolio-dev
