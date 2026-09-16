\# Git Rescue Lab Workflow Report



\### Task 1: Bisect Finding

\- \*\*Bad Commit Hash:\*\* 87dc67d

\- \*\*Explanation:\*\* The BULK20 discount logic checked `items.length > 5` instead of `items.length >= 5`, breaking discounts for orders with exactly 5 items.



\### Branching Strategy

\- \*\*Recommendation:\*\* GitHub Flow.

\- \*\*Why:\*\* Lightweight and ideal for small teams. Feature branches are merged directly into `main` via Pull Requests, avoiding complex release branches.



\### Completely Removing Secrets

\- \*\*How to remove:\*\* Use tools like `git filter-repo` or BFG Repo-Cleaner to rewrite history across all commits and force push, then rotate credentials.

\- \*\*Why not required here:\*\* `git rm --cached` stops tracking the file in future commits without altering shared repository history.



\### Rewriting Git History

\- \*\*Why Task 2 was acceptable:\*\* The reworded commit was local to the current working environment and had not been shared/pulled by teammates.

\- \*\*Why unacceptable once pulled:\*\* Rewriting commits alters commit hashes, causing history divergence and severe merge conflicts for anyone who pulled the original commit.

