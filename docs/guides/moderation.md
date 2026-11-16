---
slug: /moderation
---

# Moderation

Every community needs a way to keep content useful and conversations civil. Answer doesn't depend on a few administrators to do all of this. It shares the work across three groups:

- **The community** flags problems and suggests edits.
- **Trusted users**, people who have earned enough [reputation](/docs/reputation), review those flags and edits.
- **Moderators and administrators** make the final decisions, such as deleting content or suspending an account.

Which actions a user can take depends on their role and their reputation. See [Permission](/docs/permission) for details.

## Flagging content

Any logged-in user can flag a question, answer, or comment that they think needs attention. When flagging a post, the user picks a reason:

| Reason | Meaning |
|---|---|
| Spam | An advertisement or vandalism, not relevant to the topic. |
| Rude or abusive | Content a reasonable person would find inappropriate for respectful discussion. |
| A duplicate | (Questions) This question has already been asked and answered. The user links to the original. |
| Not an answer | Posted as an answer but doesn't try to answer the question. |
| Needs details or clarity | (Questions) Unclear, or several questions combined into one. |
| A community-specific reason | Breaks one of your community's own guidelines. |
| Other | Anything else. The user explains in their own words. |

Users can be flagged as well as posts. See [Flags](/docs/flags) for more.

## Reviewing

Flags, suggested edits, and posts held for approval all go to the **Review** page. When reviewing a flag, the reviewer decides what should happen to the post:

- **Looks OK**: the post is fine; dismiss the flag.
- **Needs edit, and I did it**: the reviewer has fixed the problem.
- **Needs close**: close the question.
- **Needs delete**: remove the post.

Edits suggested by users who don't yet have enough reputation to edit freely are also reviewed here, and are approved or rejected before they're published.

See [Review](/docs/review) for more.

## Moderating questions and answers

Moderators, and users with enough reputation, can act on posts directly from the question page. Each action is recorded in the post's history, so you can always see who did what.

- **Close** a question to stop new answers. People can still edit, vote on, and comment on a closed question, so it can be improved and **reopened** later. When closing, you choose a reason. A question closed as a duplicate links to the original.
- **Delete** a question, answer, or comment to hide it from the community. Deleted posts aren't destroyed, and can be **undeleted** if needed.
- **Unlist** a question to remove it from question lists while leaving it reachable by direct link. This is gentler than deleting.

See [Questions](/docs/questions) for how these actions affect a question's status and visibility.

## Moderating users

When a user's behavior is the problem, rather than a single post, an administrator can **suspend** them. A suspended user can't log in, either for a set period or permanently. An administrator can also delete a user and, optionally, all of their content, which is useful when cleaning up after a spam account.

See [Users](/docs/users) for more.

## Automated moderation

Answer can pass new content through a **reviewer plugin** before it's published. The plugin can approve a post, hold it in the review queue for a person to look at, or reject it. This is how you add spam filtering or AI-assisted moderation to Answer. See [Using Plugins](/docs/plugins).

## Suggested practices

- **Start with lower reputation thresholds** while your community is small, and raise them as it grows. Make sure enough people can review to keep the queue moving.
- **Prefer editing to deleting.** If a post can be saved, fixing it helps both the author and the community.
- **Close before you delete.** Closing gives the author a chance to improve their question.
- **Write down your community's guidelines**, so that people know what the *community-specific reason* flag refers to.
