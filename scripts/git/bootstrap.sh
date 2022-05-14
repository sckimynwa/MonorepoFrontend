#!/bin/bash

PROJECT=$1

case $PROJECT in

*)
  FOLDERS="services/$PROJECT .yarn scripts .github .vscode";;


esac

# only "files(not directory)" on root
echo "Running 'git sparse-checkout init --cone"
git sparse-checkout init --cone

# add specific service directory
echo "Running 'git sparse-checkout set $FOLDERS"
git sparse-checkout set $FOLDERS
