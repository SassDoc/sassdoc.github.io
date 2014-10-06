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

ALL += require-theme
ALL += $(PREVIEW)
ALL += $(THUMB)

all: $(ALL)

require-theme:
	if [ -z '$(THEME)' ]; then echo 'Usage: make THEME=<theme>' >&2; exit 1; fi

$(PREVIEW): $(PREVIEW_DIR) $(SAMPLE) $(SASSDOC) $(THEME_PACKAGE)
	$(SASSDOC) $(SAMPLE) $@ --theme $(THEME_PACKAGE)

$(THUMB): $(THUMB_DIR) $(WEBSHOT)
	$(WEBSHOT) $(PREVIEW)/index.html $@
	$(MOGRIFY) -resize 256x192 $@

$(SAMPLE):
	$(GIT) clone https://github.com/SassDoc/sassdoc-theme-light .$@
	mv .$@/scss/utils $@
	$(RM) -r .$@

$(THEME_PACKAGE):
	npm install $(THEME_PACKAGE_NAME)

$(SASSDOC):
	$(NPM) install sassdoc

$(WEBSHOT):
	$(NPM) install webshot-cli

$(DIRS):
	mkdir $@
