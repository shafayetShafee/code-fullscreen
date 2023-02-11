local function ensure_html_deps()
  quarto.doc.add_html_dependency({
    name = "jquery",
    version = "3.6.3",
    scripts = {
      { path = "asset/jquery-3.6.3.min.js"}
    }
  })
  quarto.doc.add_html_dependency({
    name = "code-fullscreen",
    version = "1.0.0",
    scripts = {
      { path = "resources/js/code-fullscreen.js", attribs = {defer = "true"} }
    },
    stylesheets = {"resources/css/code-fullscreen.css"}
  })
end


local function ensure_revealjs_deps()
  quarto.doc.add_html_dependency({
    name = "jquery",
    version = "3.6.3",
    scripts = {
      { path = "asset/jquery-3.6.3.min.js"}
    }
  })
  quarto.doc.add_html_dependency({
    name = "code-fullscreen",
    version = "1.0.0",
    scripts = {
      { path = "resources/js/reveal-code-fullscreen.js", attribs = {defer = "true"} }
    },
    stylesheets = {"resources/css/reveal-code-fullscreen.css"}
  })
end


if quarto.doc.is_format('html') then
  ensure_html_deps()
elseif quarto.doc.is_format('revealjs') then
  ensure_revealjs_deps()
end
