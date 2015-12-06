all:
	@node_modules/.bin/jake

$(MAKECMDGOALS):
	@node_modules/.bin/jake $@

.PHONY: $(MAKECMDGOALS)
