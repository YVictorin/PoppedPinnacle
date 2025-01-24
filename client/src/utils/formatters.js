// this will turn 9,211,122,221 to 9.2M
const COMPACT_NUMBER_FORMATTER = new Intl.NumberFormat(undefined, {
    notation: "compact"
})
export function  formatCompactNumber(number) {
    return COMPACT_NUMBER_FORMATTER.format(number)
}