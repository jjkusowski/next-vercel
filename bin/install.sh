#!/bin/bash
set -e

source ~/.nvm/nvm.sh

# Use node 12
nvm use 12
npm install -g yarn

# Clear the acche
yarn cache clean

yarn
