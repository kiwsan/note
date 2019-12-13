#!/bin/bash

openssl aes-256-cbc -K $encrypted_58ca57a8e487_key -iv $encrypted_58ca57a8e487_iv -in travis_rsa.enc -out travis_rsa -d
chmod 600 travis_rsa
mv travis_rsa ~/.ssh/travis_rsa
