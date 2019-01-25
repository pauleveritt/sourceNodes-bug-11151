# Recreate ``mapping`` Issue

Doing forward/backwards references as instructed means content authors have 
to delete caches frequently.

## Steps

This repo is to reproduce the [reported issue](https://github.com/gatsbyjs/gatsby/issues/11151).

1) Started by following steps of [Adding Markdown Pages](https://www.gatsbyjs.org/docs/adding-markdown-pages/)

2) Made three "types" of Markdown docs: post, author, topic. The post is 1:1 with author and 
1:N with topics. Put examples in `content` and templates in `src/templates`, then a simple 
change in `gatsby-node` to use the correct template based on the `type` specified in each 
frontmatter.

3) Used `gatsby-config` to make mappings from post -> author and post -> topics.

4) Made a reverse 1:N mapping from author -> posts. It works but only returns a single 
post. Ditto for topics.

5) Change the `title` of `author1` and see it isn't reflected when viewing `post1`. 
It never will, unless you either (a) hand-edit all posts or (b) clear `.cache/*`.

## Problems

1) *Changing target metadata doesn't change source*. If you change the `title` of an author, 
`gatsby develop` logs that the file changes, but it doesn't update the rendered post that 
refers to the author. Re-starting `gatsby develop` doesn't refresh it either. You have 
make a small edit to all posts that refer to it, or `rm -rf .cache/*`

What's worse...`gatsby build` doesn't update the posts. You have to 
`rm -rf public/*`

2) *Backward mapping half-works*. If it is a 1:1 backward reference, it works. If 
the reference should produce multiple results as 1:N, you don't get an array, 
you just get the first item.

## Discussion

This is true when doing the mapping manually with `sourceNodes` as described in 
the docs on [forward relationships](https://www.gatsbyjs.org/docs/create-source-plugin/#creating-the-relationship) 
and [reverse relationships](https://www.gatsbyjs.org/docs/create-source-plugin/#creating-the-reverse-relationship).

Why? Because that document and several tickets say to use the `sourceNodes` API to create a 
new `field` with the `id` value/values of the other end of the relationship. `sourceNodes` 
never fires after startup. So as you edit content, fixing relationships never runs. 

It appears even restart doesn't help, and you have to `rm -rf .cache/*` to 
trigger updating of relationships.

## Conclusion

If you value content authors, don't do relationships with the APIs. Recreate the universe 
in all your page queries.
