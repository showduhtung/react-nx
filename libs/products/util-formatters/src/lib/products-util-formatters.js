export function formatRating(rating) {
  return `${Math.round(rating * 100) / 10} / 10`;
}
