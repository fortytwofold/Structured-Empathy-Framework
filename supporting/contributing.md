---
title: Contributing to the Structured Empathy Framework
---
# Contributing to the Structured Empathy Framework

This short guide is to help you contribute content for the Structured Empathy Framework in an easy and consistent way.  

For the **technical people** - the TL:DR is its all in a public [GitHub Repo](https://github.com/fortytwofold/Structured-Empathy-Framework) in Markdown. Note the guiderails in the primer below, but please just dive in and propose changes via Pull Requests.

For the **non-technical people** - please don't be scared - this is actually realy easy, you just need to understand two key aspects.

Firstly - **GitHub**.  GitHub is the leading online tool for hosting and managing opensource. While it is massively used for Software, it is equally suited for managing frameworks such as this.  There are a view key concepts to learn:

### Main Branch
Think of the main branch as the official, published version of the work — the “source of truth.”
It’s the tidy, reliable copy that everyone trusts. Nothing goes into it until it’s been checked and agreed.

### Branches
A branch is like taking a photocopy of the main document so you can work on your own version without affecting the official one.
You can experiment, improve wording, add ideas, or fix things — all without risking the main version.

### Commits
A commit is a small, saved step in your work on a branch.
It’s like writing a sticky note that says: “I changed this bit, and here’s why.”
Commits help track progress and make it easy to review or undo changes if needed.

### Pull Requests
A pull request (often called a PR) is how you ask for your changes to be added back into the official main branch.
It’s a structured way of saying:
“I’ve made some improvements — can someone review them and merge them in?”
Pull requests create a safe, transparent space for discussion, feedback, and refinement before anything becomes part of the main version.

So to contribute to the Framework, you need to have a GitHub account - if you don't have one these are free and you can set one up [here](https://github.com/signup).

With a GitHub account, you can then use the Public ['Structured Empathy Framework' Repositry](https://github.com/fortytwofold/Structured-Empathy-Framework). The best thing to do is click on the branch (the drop down button that says *'Main'*) and create yourself your own branch - name it anything you like.

From here you can go in and edit any file in the Framework, 'committing' your changes to your own branch. Once you are happy you have a collection of changes you want to submit into the main version of the Framework, click on 'Pull Request' and submit a pull request to merge your changes into 'main'.  Once this is succesfully done, its worth pressing the button to delete your branch and start a new one, just as it helps keep things tidy.

The second key aspect to understand is **Markdown**.  Markdown is very simply a way of adding simple symbols into plain text to define what is a heading, what should be in bold, and other basic formatting.  There is a 'Primer' below that explains this, but as you will see it is very simple and easy way of writing documentation and allowing it to be easily transformed into a website and other formats like PDFs.

## Markdown Primer for Contributors

As described, the content for the framework uses 'Markdown', a simple and widely used plain‑text format. If you are not a techie, please don't panic - seriously this is easier than using a Word Processor!

These Mardown pages and in turn automatically converted into the 'structuredempathy.net' website and thus clean, styled pages automatically. This also means the Mardown pages can be used for other mediums inclouding creating PDF files. Critically - this public repository is content‑only: our supporting infrastructure handles layout, styling, and link/image rewriting.

The following section describes how a Markdown page is created and formatted;  you can use this to either understand how to modify existing pages in the framework, or create whole new pages

### Front‑matter - required at the top of every page

Each Markdown file must begin with a title block exactly as this:

    ---
    title: Page Title
    ---

This enables the site generator to both set the title of the page (as seen by the browser and search engines) and apply the correct layout.

### Headings

Use `#` symbols. More `#` = smaller heading.

`    # Page Title  

`    ## Section Heading  

`    ### Sub‑section  

### Paragraphs

Write text normally, with a blank line between paragraphs.

 `   This is a paragraph.  

`      This is another paragraph.  

### Bold & Italic

`    **bold text**  
`    *italic text*  

### Lists

#### Bullet list

`    - First item  
`    - Second item  
`    - Third item  

#### Numbered list

`    1. Step one  
`    2. Step two  
`    3. Step three  

### Links

#### External link

 `   [Forty Two Fold](https://fortytwofold.com)

#### Link to another page in the framework

Use a **relative path**, starting from the current file. Supporting processes such as the website builder will rewrite .md links into clean URLs automatically.

Example: linking from `components/empathy-mapping.md` to `introduction/overview.md`:

 `   [Overview](../introduction/overview.md)

Example: linking to a page in the same folder:

 `   [Glossary](glossary.md)

### Images

Place images in an 'images/' folder next to your Markdown file. Use relative paths in Markdown; as above the website builder will rewrite image URLs and handle sizing/styling automatically.

Example folder:

 `   components/
 `     empathy-mapping.md
 `     images/
 `       empathy-map.png

Image syntax:

 `   ![Alt text](images/empathy-map.png)

### Quotes

 `   > This is a quoted block of text.

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
