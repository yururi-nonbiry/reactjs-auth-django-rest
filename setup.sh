#!/bin/sh

cp -n temp.env .env

docker compose build
docker compose -f docker-compose-setup.yml up -d
docker compose exec django python manage.py makemigrations user_profile
docker compose exec django python manage.py migrate
docker compose exec react npm install
docker compose -f docker-compose-setup.yml down

echo "Done!"
