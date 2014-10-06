RAW_BASE_URL = https://raw.githubusercontent.com/SassDoc/sassdoc/master
CHANGELOG_URL = $(RAW_BASE_URL)/CHANGELOG.md
CHANGELOG_HEADER = '---\nlayout: default\ntitle: "Changelog"\n---\n\n'

changelog: changelog/index.md

changelog/index.md: force
	(printf -- $(CHANGELOG_HEADER); curl -s $(CHANGELOG_URL) | sed 1,2d) > $@

THEMES = $(shell echo theme-picker/node_modules/sassdoc-theme-*/package.json)

themes: _data/themes.yml

_data/themes.yml: $(THEMES) | theme-picker
	for i in $^; do name=$$(basename $$(dirname $$i) | sed 's/^sassdoc-theme-//'); sed "1s/^/$$name: /" $$i; done > $@

theme-picker: force
	cd $@ && $(MAKE)

force:
