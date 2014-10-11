include themes.mk

MOGRIFY = mogrify
NPM = npm
GIT = git

SASSDOC = node_modules/sassdoc/bin/sassdoc
WEBSHOT = node_modules/webshot-cli/webshot

THEME_PACKAGE_PREFIX = sassdoc-theme-
THEME_PACKAGE_NAME = $(THEME_PACKAGE_PREFIX)$(THEME)
THEME_PACKAGE = node_modules/$(THEME_PACKAGE_NAME)

PREVIEW_DIR = preview
THUMB_DIR = thumbs

DIRS = $(PREVIEW_DIR) $(THUMB_DIR)

PREVIEW = $(PREVIEW_DIR)/$(THEME)
THUMB = $(THUMB_DIR)/$(THEME).png
SAMPLE = sample

THEME_PACKAGES = $(addprefix node_modules/$(THEME_PACKAGE_PREFIX), $(THEMES))
THEME_PREVIEWS = $(addprefix $(PREVIEW_DIR)/, $(THEMES))
THEME_THUMBS = $(addsuffix .png, $(addprefix $(THUMB_DIR)/, $(THEMES)))

ALL = $(THEME_PACKAGES) $(THEME_PREVIEWS) $(THEME_THUMBS)

all: $(ALL)

update:
	$(NPM) update
	$(MAKE)

$(THUMB_DIR)/%.png: $(PREVIEW_DIR)/% | $(WEBSHOT) $(THUMB_DIR)
	$(WEBSHOT) $</index.html $@
	$(MOGRIFY) -resize 256x192 $@

$(PREVIEW_DIR)/%: node_modules/$(THEME_PACKAGE_PREFIX)% $(SAMPLE) | $(SASSDOC) $(PREVIEW_DIR)
	$(SASSDOC) $(SAMPLE) $@ --theme $<

node_modules/$(THEME_PACKAGE_PREFIX)%:
	npm install $(@F)

$(SAMPLE):
	$(GIT) clone https://github.com/SassDoc/sassdoc-theme-light .$@
	mv .$@/scss/utils $@
	$(RM) -r .$@

$(SASSDOC):
	$(NPM) install sassdoc

$(WEBSHOT):
	$(NPM) install webshot-cli

$(DIRS):
	mkdir $@
