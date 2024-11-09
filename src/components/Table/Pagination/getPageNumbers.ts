'use client'
export default function getPageNumbers(
    currentPage: number,
    numberOfPages: number,
): number[] {
    const numberOfPrefixedPages = 1
    const numberOfSuffixedPages = 1
    const maxNumberOfPagesOnEachSide = 1

    const pageNumbers = []
    if (numberOfPages <= maxNumberOfPagesOnEachSide * 2 + 1) {
        for (let i = 1; i <= numberOfPages; i++) {
            pageNumbers.push(i)
        }
    } else {
        const min = currentPage - maxNumberOfPagesOnEachSide
        const max = currentPage + maxNumberOfPagesOnEachSide

        if (min >= numberOfPrefixedPages + 1) {
            for (let i = 1; i <= numberOfPrefixedPages; i++) {
                pageNumbers.push(i)
            }
            if (min > numberOfPrefixedPages + 1) {
                pageNumbers.push(-1)
            }
        }

        for (let i = min; i <= max; i++) {
            if (i >= 1 && i <= numberOfPages) {
                pageNumbers.push(i)
            }
        }

        if (max <= numberOfPages - numberOfSuffixedPages - 1) {
            pageNumbers.push(-1)
        }

        if (max < numberOfPages) {
            for (
                let i = Math.max(
                    max + 1,
                    numberOfPages - numberOfSuffixedPages + 1,
                );
                i <= numberOfPages;
                i++
            ) {
                pageNumbers.push(i)
            }
        }
    }

    return pageNumbers
}
