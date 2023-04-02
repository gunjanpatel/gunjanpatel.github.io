<template>
  <div id="gist36806215" class="gist">
    <div class="gist-file" translate="no">
      <div class="gist-data">
        <div class="js-gist-file-update-container js-task-list-container file-box">
          <div id="file-revert-a-commit-md" class="file my-2">
            <div id="file-revert-a-commit-md-readme" class="Box-body readme blob js-code-block-container p-5 p-xl-6 ">
              <article class="markdown-body entry-content container-lg" itemprop="text"><h3 dir="auto"><a id="user-content-revert-the-full-commit" class="anchor" aria-hidden="true" href="#revert-the-full-commit"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a>Revert the full commit</h3>
                <p dir="auto">Sometimes you may want to undo a whole commit with all changes. Instead of going through all the changes manually, you can simply tell git to revert a commit, which does not even have to be the last one. Reverting a commit means to create a new commit that undoes all changes that were made in the bad commit. Just like above, the bad commit remains there, but it no longer affects the the current master and any future commits on top of it.</p>
                <pre><code>git revert {commit_id}
</code></pre>
                <h3 dir="auto"><a id="user-content-about-history-rewriting" class="anchor" aria-hidden="true" href="#about-history-rewriting"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a>About History Rewriting</h3>
                <h4 dir="auto"><a id="user-content-delete-the-last-commit" class="anchor" aria-hidden="true" href="#delete-the-last-commit"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path></svg></a>Delete the last commit</h4>
                <p dir="auto">Deleting the last commit is the easiest case. Let's say we have a remote <em>origin</em> with branch <em>master</em> that currently points to commit <em>dd61ab32</em>. We want to remove the top commit. Translated to git terminology, we want to force the <em>master</em> branch of the <em>origin</em> remote repository to the parent of <em>dd61ab32</em>:</p>
                <pre><code>git push origin +dd61ab32^:master
</code></pre>
                <p dir="auto">Where git interprets <code>x^</code> as the parent of <code>x</code> and <code>+</code> as a forced non-fastforward push. If you have the master branch checked out locally, you can also do it in two simpler steps: First reset the branch to the parent of the current commit, then force-push it to the remote.</p>
                <pre><code>git reset HEAD^ --hard

git push origin -f
</code></pre>
                <hr>
                <p dir="auto">This document is inspired by <a href="http://christoph.ruegg.name/blog/git-howto-revert-a-commit-already-pushed-to-a-remote-reposit.html" rel="nofollow">http://christoph.ruegg.name/blog/git-howto-revert-a-commit-already-pushed-to-a-remote-reposit.html</a> - Thank you.</p>
              </article>
            </div>

          </div>
        </div>

      </div>
      <div class="gist-meta">
        <a href="https://gist.github.com/gunjanpatel/18f9e4d1eb609597c50c2118e416e6a6/raw/184a44ec53fe73d62f76eb651003a5ab6864ca4f/revert-a-commit.md" style="float:right">view raw</a>
        <a href="https://gist.github.com/gunjanpatel/18f9e4d1eb609597c50c2118e416e6a6#file-revert-a-commit-md">
          revert-a-commit.md
        </a>
        hosted with &#10084; by <a href="https://github.com">GitHub</a>
      </div>
    </div>
  </div>
</template>
<script setup>
useHead({
  bodyAttrs: {
    class: 'dark:bg-gray-900 dark:text-white'
  },
  link: [
    { rel: 'stylesheet', href: 'https://github.githubassets.com/assets/gist-embed-aa244c59879c.css' }
  ]
})
</script>
