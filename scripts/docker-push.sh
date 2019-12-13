#!/bin/bash

echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin

docker tag noted $DOCKERHUB_NOTED
docker push $DOCKERHUB_NOTED
