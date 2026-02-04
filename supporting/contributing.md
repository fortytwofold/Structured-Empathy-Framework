---
title: Contributing to the Structured Empathy Framework
---
# Contributing to the Structured Empathy Framework

This short guide is to help you contribute content for the Structured Empathy Framework in an easy and consistent way.

For the **technical people** — the TL;DR is that everything lives in a public [GitHub repository](https://github.com/fortytwofold/Structured-Empathy-Framework) written in Markdown. Please note the guide rails in the primer below, but otherwise feel free to dive in and propose changes via Pull Requests.

For the **non-technical people** - please don't be scared - it is all very straightforward once you understand a couple of concepts and follow the instructions and guidance set out below.  **GitHub** is the tool that is used to host the Structured Empathy Framework.  Instructions for using it are set out below. **Markdown** is the notation that is used within GitHub to add formating to text.  The guidance in the 'Primer' below explains how this works. 


## Using GitHub

GitHub is the leading online tool for hosting and managing opensource. While it is massively used for Software, it is equally suited for managing frameworks such as this.  There are a view key concepts to learn:

### Main Branch  
Think of the **main** branch as the official, published version of the Framework — the “source of truth.”  
It’s the tidy, reliable copy that everyone trusts. Nothing goes into it until it has been reviewed and agreed.

### Forks  
Instead of editing the official version directly, GitHub gives you your own personal copy called a **fork**.  
A fork is like taking a photocopy of the Framework so you can work freely without affecting the original.

You create your fork by clicking the **Fork** button at the top‑right of the repository page.

### Commits  
A commit is a small, saved step in your work.  
It’s like writing a sticky note that says: “I changed this bit, and here’s why.”  
Commits help track progress and make it easy to review or undo changes if needed.

### Pull Requests  
A pull request (PR) is how you ask for your changes to be added back into the official Framework.  
It’s a structured way of saying:

> “I’ve made some improvements — could someone review them and merge them into the main version?”

Pull requests create a safe, transparent space for discussion, feedback, and refinement before anything becomes part of the published Framework.

### How to contribute step‑by‑step

1. **Create a GitHub account**  
   If you don’t already have one, you can sign up for free [here](https://github.com/signup).

2. **Fork the Structured Empathy Framework repository**  
   Visit the public repo and click **Fork**.

3. **Make your changes in your fork**  
   Open any page and click **Edit**.  
   You can improve wording, add ideas, fix typos, or propose new content.

4. **Commit your changes**  
   Add a short message explaining what you changed and why.

5. **Open a Pull Request**  
   When you’re ready, click **Pull Request** to ask for your changes to be reviewed and merged into the official Framework.

6. **Keep things tidy**  
   After your pull request is merged, you can delete your fork or update it later if you want to contribute again.

This workflow keeps everything safe, simple, and transparent — and it’s the standard approach used across open‑source communities.


## Markdown Primer for Contributors

As described, the content for the framework uses 'Markdown', a simple and widely used plain‑text format. If you are not a techie, please don't panic - seriously this is easier than using a Word Processor!

These Markdown pages and in turn automatically converted into the 'structuredempathy.net' website and thus clean, styled pages automatically. This also means the Markdown pages can be used for other mediums inclouding creating PDF files. Critically - this public repository is content‑only: our supporting infrastructure handles layout, styling, and link/image rewriting.

The following section describes how a Markdown page is created and formatted;  you can use this to either understand how to modify existing pages in the framework, or create whole new pages

### Front‑matter - required at the top of every page

Each Markdown file must begin with a title block exactly as this:

```
---
title: Page Title
---
```

This enables the site generator to both set the title of the page (as seen by the browser and search engines) and apply the correct layout.

### Headings

Use `#` symbols. More `#` = smaller heading.

```
# Page Title

## Section Heading

### Sub‑section
```

### Paragraphs

Write text normally, with a blank line between paragraphs.
```
This is a paragraph.  

This is another paragraph.  
```

### Bold & Italic

```
**bold text**  
*italic text*  
```

### Lists

#### Bullet list

```
- First item  
- Second item  
- Third item  
```

#### Numbered list

```
1. Step one  
2. Step two  
3. Step three
```

### Links

#### External link

```
[Forty Two Fold](https://fortytwofold.com)
```

#### Link to another page in the framework

Use a **relative path**, starting from the current file. Supporting processes such as the website builder will rewrite .md links into clean URLs automatically.

Example: linking from `components/empathy-mapping.md` to `introduction/overview.md`:

```
[Overview](../introduction/overview.md)
```

Example: linking to a page in the same folder:

```
[Glossary](glossary.md)
```

### Images

Place images in an 'images/' folder next to your Markdown file. Use relative paths in Markdown; as above the website builder will rewrite image URLs and handle sizing/styling automatically.

Example folder:

```
  components/
    empathy-mapping.md
    images/
        empathy-map.png
```

Image syntax:

```
![Alt text](images/empathy-map.png)
```

### Quotes

```
> This is a quoted block of text.
```

### What *not* to do

Please follow these simple rules:

- No HTML tags  
- No inline styling (colours, fonts, etc.)  
- No scripts  
- No absolute URLs to images  
- No spaces in filenames  

This enables the the build system to handle all styling and layout automatically.  
  
## Website Builds

Pull requests are reviewed by the Forty Two Fold staff as soon as possible once they are submitted. You will get a response to your Pull Request confirming if it was accepted into 'main' and thus now forms part of the framework,  or if not - why not!

The website is automatically rebuilt overnight from the 'main' repo.  So any approved pull requests should be automatically incorporated into the live website within 24 hours.

If you need any help, please don't hesitate to reach out via the [contact](contact.md) page.

The next page is the [Frequently Asked Questions - FAQ](faq.md).

You can always return to the [contents page](../contents/contents.md) by clicking the 'Structured Empathy Framework' title at the top of the page.
