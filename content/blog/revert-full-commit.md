---
title: Revert the full commit
show_heading: true
description: Sometimes you may want to undo a whole commit with all changes. Instead of going through all the changes manually, you can simply tell git to revert a commit, which does not even have to be the last one. Reverting a commit means to create a new commit that undoes all changes that were made in the bad commit. Just like above, the bad commit remains there, but it no longer affects the the current master and any future commits on top of it.
imageUrl: https://images.unsplash.com/photo-1647166545674-ce28ce93bdca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80
alt: Revert the full commit
date: 2nd April 2023 
layout: full-width
tags:
  - Git
---
# Revert the full commit
Sometimes you may want to undo a whole commit with all changes. Instead of going through all the changes manually, you can simply tell git to revert a commit, which does not even have to be the last one. Reverting a commit means to create a new commit that undoes all changes that were made in the bad commit. Just like above, the bad commit remains there, but it no longer affects the the current master and any future commits on top of it.

```shell
git revert {commit_id}
```


## About History Rewriting
### Delete the last commit
Deleting the last commit is the easiest case. 
Let's say we have a remote origin with branch master that currently points to commit _dd61ab32_. 
We want to remove the top commit. Translated to git terminology, we want to force the master branch of the origin remote repository to the parent of _dd61ab32_:

```shell
git push origin +dd61ab32^:master
```

Where git interprets `x^` as the parent of `x` and `+` as a forced non-fastforward push. 
If you have the master branch checked out locally, you can also do it in two simpler steps: First reset the branch to the parent of the current commit, then force-push it to the remote.

```shell
git reset HEAD^ --hard

git push origin -f
```
---
This document is inspired by http://christoph.ruegg.name/blog/git-howto-revert-a-commit-already-pushed-to-a-remote-reposit.html - Thank you.
