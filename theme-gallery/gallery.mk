PREVIEW_DIR = $(THEME_GALLERY)/preview
THUMB_DIR = $(THEME_GALLERY)/thumbs
SAMPLE_DIR = $(THEME_GALLERY)/sample

DIRS += $(PREVIEW_DIR) $(THUMB_DIR)

THEME_PACKAGES = $(addprefix node_modules/sassdoc-theme-, $(THEMES))
THEME_PREVIEWS = $(addprefix $(PREVIEW_DIR)/, $(THEMES))
THEME_THUMBS = $(addsuffix .png, $(addprefix $(THUMB_DIR)/, $(THEMES)))

theme-gallery: $(THEME_PACKAGES) $(THEME_PREVIEWS) $(THEME_THUMBS)

$(THUMB_DIR)/%.png: $(PREVIEW_DIR)/% | $(THUMB_DIR)
	$(SHOT) file://$(PWD)/$</index.html 1024 768 $@
	$(MOGRIFY) -resize 256x192 $@

$(PREVIEW_DIR)/%: node_modules/sassdoc-theme-% $(SAMPLE_DIR) | $(PREVIEW_DIR)
	$(SASSDOC) $(SAMPLE_DIR) $@ --theme $<

node_modules/sassdoc-theme-%:
	npm install $(@F)

$(SAMPLE_DIR):
	$(GIT) clone https://github.com/SassDoc/sassdoc-theme-default $@-git
	mv $@-git/scss/utils $@
	$(RM) -r $@-git
