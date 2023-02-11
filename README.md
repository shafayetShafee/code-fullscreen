# Code-fullscreen Extension For Quarto

`code-fullscreen` is [Quarto](https://quarto.org/) filter that adds a fullscreen button in the code blocks in revealjs slides and html documents.

[`View live demo`](https://shafayetshafee.github.io/code-fullscreen/example_revealjs.html)

## Installing

:warning: This extension requires Quarto version to be at least 1.2

```bash
quarto add shafayetShafee/code-fullscreen
```

This will install the extension under the `_extensions` subdirectory.
If you're using version control, you will want to check in this directory.

## Using

Simply use the filter in the document yaml section.

```
filters:
  - code-fullscreen
```

Then a [fullscreen](https://icons.getbootstrap.com/icons/fullscreen/) button will be added in top right corner of each code blocks. 

## Example

- The source codes for a example of html format: [example.qmd](example.qmd) and [rendered html document](https://shafayetshafee.github.io/code-fullscreen/example.html)

- The source code for a example revealjs Slides [example_revealjs.qmd](example_revealjs.qmd) and [rendered slides](https://shafayetshafee.github.io/code-fullscreen/example_revealjs.html)


## Acknowledgement

The internal js and css code taken and modified from [Reveal.js fullscreen code plugin](https://github.com/mkordulewski/reveal.js-fullscreen-code).
