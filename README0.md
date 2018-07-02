# TYPO3 Blog Template Extension

## Installation

1) Install EXT:blog
2) Install EXT:typo3kb (this extension)
3) Create a subtree for the blog
4) Create a folder as storage for all data
5) Create your blog post as pages of type "blog post" within the folder
6) Add the static "TYPO3 Blog Template" to your blog root page
7) Configure your blog via constants:
    ```
    plugin.tx_blog.settings.blogUid = <UID of Rootpage>
    plugin.tx_blog.persistence.storagePid = <UID of Storage>
    ```
8) Take care of realurl config (see next section)

## realurl config

The extension EXT:blog delivers a realurl config, all you need is a mapping for your own instance.
Add the following rules to your realurl config:

```
    'fixedPostVars' => [
        '<UID_CATEGORY_PAGE>' => 'tx_blog_category',
        '<UID_TAG_PAGE>' => 'tx_blog_tag',
        '<UID_ARCHIVE_PAGE>' => 'tx_blog_archive'
    ]
```

## Customize templates

Templates configured via TypoScript in ``EXT:typo3kb/Configuration/TypoScript/BlogTemplate/``

You can find the markup in: ``EXT:typo3kb/Resource/Private/``
