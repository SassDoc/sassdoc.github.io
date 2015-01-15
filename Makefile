GIT = git
MOGRIFY = mogrify

SASSDOC = node_modules/sassdoc/bin/sassdoc
SHOT = utils/shot

SASSDOC_THEME = node_modules/sassdoc-theme-default

RAW_BASE_URL = https://raw.githubusercontent.com/SassDoc/sassdoc/master

all: changelog preview themes gallery

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

assets/images/preview-image.png: $(SASSDOC_THEME)
	echo '{"package": "node_modules/sassdoc-theme-default/package.json"}' > .preview.json
	$(SASSDOC) $</scss --dest .preview --config .preview.json
	$(SHOT) file://$(PWD)/.preview/index.html 1200 675 $@
	$(RM) -r .preview .preview.json

# }}}

# Theme gallery {{{
# =================

THEME_GALLERY = theme-gallery

include $(THEME_GALLERY)/themes.mk
include $(THEME_GALLERY)/gallery.mk

themes: _data/themes.yml

_data/themes.yml: $(THEME_PACKAGES) | theme-gallery
	for i in $(addsuffix /package.json, $^); do \
		name=$$(basename $$(dirname $$i) | sed 's/^sassdoc-theme-//'); \
		sed "1s/^/$$name: /" $$i; \
	done > $@

# }}}

# Gallery {{{
# ===========

GALLERY = _data/gallery.yml
GALLERY_DIR = assets/images/gallery
GALLERY_IMAGES = $(addprefix $(GALLERY_DIR)/, $(shell awk '$$1 == "image:" {print $$2}' $(GALLERY)))

DIRS += $(GALLERY_DIR)

gallery: $(GALLERY_IMAGES)

$(GALLERY_IMAGES): $(GALLERY) | $(GALLERY_DIR)
	url=$$(grep -B1 '$(@F)' $< | sed 's/.*: //;q'); \
	utils/shot "$$url" 1440 900 $@
	$(MOGRIFY) -resize 900x $@

# }}}

# Common {{{
# ==========

$(DIRS):
	mkdir $@

force:

# }}}
