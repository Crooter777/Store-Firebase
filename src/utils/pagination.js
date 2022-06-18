
export default function pagination(pagesQuantity, currentPage, oldPage) {

    let pagesArray = []
    pagesArray.push(currentPage)

    if (currentPage > oldPage || !oldPage || currentPage === 1) {
        for (let i=currentPage - 1; i > 0 && pagesArray.length < 3; i--) {
            pagesArray.unshift(i)
        }
        for (let i=currentPage + 1; i < pagesQuantity && pagesArray.length < 4; i++) {
            pagesArray.push(i)
        }
    } else {
        for (let i=currentPage + 1; i < pagesQuantity && pagesArray.length < 3; i++) {
            pagesArray.push(i)
        }
        for (let i=currentPage - 1; i > 0 && pagesArray.length < 4; i--) {
            pagesArray.unshift(i)
        }
    }
    if (pagesQuantity -2 > currentPage && pagesArray[pagesArray.length -1] +1 !== pagesQuantity) {
        // pagesArray.splice(-2, 1)
        pagesArray.push('...')
    }
    if (currentPage !== pagesQuantity) {
        pagesArray.push(pagesQuantity)
    }
    for (let i=pagesArray[0] - 1; pagesArray.length < 5 && i !== 0; i--) {
        pagesArray.unshift(i)
    }

    return pagesArray
}

