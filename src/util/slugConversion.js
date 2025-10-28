// added underscores, whitespaces, lowercase conversion for scaling and other naming cases
export function fileToSlug(textfile) {
  return textfile
    .replace(/\.[^/.]+$/, "") // remove extension
    .replace(/[_\s]+/g, "-") // convert underscores/spaces to hyphens
    .toLowerCase();
}
