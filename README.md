# Recreate sourceNodes mapping Issue

This repo is to reproduce the [reported issue](https://github.com/gatsbyjs/gatsby/issues/11151).

1) Started by following steps of [Adding Markdown Pages](https://www.gatsbyjs.org/docs/adding-markdown-pages/)

2) Made three "types" of Markdown docs: post, author, topic. The post is 1:1 with author and 
1:N with topics. Put examples in `content` and templates in `src/templates`, then a simple 
change in `gatsby-node` to use the correct template based on the `type` specified in each 
frontmatter.

3) Used `gatsby-config` to make mappings from post -> author and post -> topics.

4) Made a reverse 1:N mapping from author -> posts. It works but only returns a single 
post. Ditto for topics.

## Problems

First, 1:N on the reverse isn't supported (final bullet above.)

Worse, no changes after `gatsby develop` starts up are reflected in the content author's 
browser. To recreate:

- Run `gatsby develop`

- Go to `http://localhost:8000/blog/hello` and view a post's author's `title`

- Open `content/author.md` for editing

- Edit the `title`

- Note that nothing changes in the browser

Diagnosis: If this relationship was being resolved in a page query, it would show up.

## `sourceNodes`

It would be *great* if `mapping` could do reverse as well as forward, rather than me using `sourceNodes` to 
maintain [forward relationships](https://www.gatsbyjs.org/docs/create-source-plugin/#creating-the-relationship) 
and [reverse relationships](https://www.gatsbyjs.org/docs/create-source-plugin/#creating-the-reverse-relationship).

Why? Because that document and several tickets say to use the `sourceNodes` API to create a 
new `field` with the `id` value/values of the other end of the relationship. `sourceNodes` 
never fires after startup. So as you edit content, fixing relationships never runs. 

In some cases, it appears even restart doesn't help, and you have to `rm -rf .cache/*` to 
trigger updating of relationships.
