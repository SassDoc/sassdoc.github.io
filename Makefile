RAW_BASE_URL = https://raw.githubusercontent.com/SassDoc/sassdoc/master
CHANGELOG_URL = $(RAW_BASE_URL)/CHANGELOG.md
CHANGELOG_HEADER = '---\nlayout: default\ntitle: "Changelog"\n---\n\n'

changelog: changelog/index.md

changelog/index.md: force
	(printf -- $(CHANGELOG_HEADER); curl -s $(CHANGELOG_URL) | sed 1,2d) > $@

THEMES = $(shell echo theme-picker/node_modules/sassdoc-theme-*/package.json)

_data/themes.yml: $(THEMES)
	for i in $^; do sed '1s/^/- /;2,$$s/^/  /' "$$i"; done > $@

force:
