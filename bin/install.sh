#!/bin/bash
set -e

source ~/.nvm/nvm.sh

# Use node 10
nvm use 10
npm install -g yarn

# Clear the acche
yarn cache clean

yarn
