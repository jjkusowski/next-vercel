#!/bin/bash
set -e

source ~/.nvm/nvm.sh

# Run Node 10
nvm use v10 >/dev/null

# Make sure the locally installed node executables are available to the script
export PATH=$PATH:./node_modules/.bin

# Run whatever command was passed to the script.
eval $@