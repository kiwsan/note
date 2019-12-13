#!/bin/bash

gatsby build
cd public
cp index.html 404.html
cd ..
