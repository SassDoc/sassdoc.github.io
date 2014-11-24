NPM = npm
GIT = git
MOGRIFY = mogrify

SASSDOC = node_modules/sassdoc/bin/sassdoc
WEBSHOT = node_modules/webshot-cli/webshot

SASSDOC_FLAGS = --force
SASSDOC_THEME = node_modules/sassdoc-theme-default

WEBSHOT_FLAGS = --default-white-background

RAW_BASE_URL = https://raw.githubusercontent.com/SassDoc/sassdoc/master

all: changelog preview themes

# Changelog {{{
# =============

CHANGELOG_URL = $(RAW_BASE_URL)/CHANGELOG.md
CHANGELOG_HEADER = '---\nlayout: default\ntitle: "Changelog"\n---\n\n'

changelog: changelog/index.md

changelog/index.md: force
	(printf -- $(CHANGELOG_HEADER); curl -s $(CHANGELOG_URL) | sed 1,2d) > $@

# }}}

# Preview {{{
# ===========

preview: assets/images/preview-image.png

assets/images/preview-image.png: $(SASSDOC_THEME) | $(SASSDOC) $(WEBSHOT)
	echo '{"package": "node_modules/sassdoc-theme-default/package.json"}' > .preview.json
	$(SASSDOC) $(SASSDOC_FLAGS) $</scss .preview --config .preview.json
	$(WEBSHOT) $(WEBSHOT_FLAGS) --window-size 1200/675 .preview/index.html $@
	$(RM) -r .preview .preview.json

# }}}

# Theme gallery {{{
# =================

GALLERY = theme-gallery

include $(GALLERY)/themes.mk
include $(GALLERY)/gallery.mk

themes: _data/themes.yml

_data/themes.yml: $(THEME_PACKAGES) | gallery
	for i in $(addsuffix /package.json, $^); do name=$$(basename $$(dirname $$i) | sed 's/^sassdoc-theme-//'); sed "1s/^/$$name: /" $$i; done > $@

# }}}


# Common {{{
# ==========

update:
	$(NPM) update

$(SASSDOC):
	$(NPM) install sassdoc

$(WEBSHOT):
	$(NPM) install webshot-cli

$(DIRS):
	mkdir $@

force:

# }}}
