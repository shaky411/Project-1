## GitHub Cheat Sheet 

* Check all branches available locally - git branch

* Switch branch - git checkout {branch-name}

* Delete local branch: git branch -d <local-branch>

* Create new branch: git branch <new-branch>

* Pull from master branch -> git pull origin master

* Change branch name, locally. Let say I want to change the name of branch marc to marc-new I would first makesure I am on the branch I want to change the run the following: git branch -m {new-branch-name-here}




## Create a new branch locally - (Curley brackets to be ignored)

* First, go to the project directory that’s connected to main.

* In the terminal, type: git branch {branch-name}

* Switch to the new branch: git checkout {new-branch-name}

* Copy the contents of main to new branch: git pull origin main

* The first time you push with this new branch you will need to do this: git push --set-upstream origin {new-branch-name}

* The recent push will need to be merged on Github

* Future pushes will now work with: git push