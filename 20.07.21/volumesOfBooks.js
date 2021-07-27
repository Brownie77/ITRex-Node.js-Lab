function generateVolumes(pages, K) {
    let chapterAmount = pages.length;
    let minPage = Math.max(...pages);
    let maxPage = pages.reduce((accumulator, currentValue) => accumulator + currentValue)
    console.log(minPage, maxPage)
    while (maxPage - minPage > 1) {
        let middle = (maxPage + minPage) / 2
    }
}
generateVolumes([1, 2, 1, 1], 3)