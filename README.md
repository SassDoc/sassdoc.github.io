# SassDoc

Like JSDoc for your Sass files.

## Building

### `make`

Make everything (all the below).

### `make changelog`

Update `changelog/index.md` from
<https://raw.githubusercontent.com/SassDoc/sassdoc/master>.

### `make themes`

Do everything needed for the theme picker to work:

1. Run `make` in `theme-gallery`. This will fetch all the themes defined
   in `themes.mk`, render them in `preview` and generate thumbnails in
   `thumbs`.

2. Generate `_data/themes.yml` from the `package.json` of each theme
   previously downloaded.
