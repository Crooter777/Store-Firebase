
export default function pagination(pagesQuantity, currentPage) {
    let pagesArray = []
    // if (c)
    if (currentPage !== 1 && currentPage !== 0) {
        pagesArray.push(currentPage - 1)
    }
    // for (let i=currentPage; i !== 1 && i !== 0 && pagesArray.length < 4; i--) {
    // }
    pagesArray.push(currentPage)
    for (let i=currentPage + 1; i < pagesQuantity && pagesArray.length < 5; i++) {
        pagesArray.push(i)
    }
    pagesArray.push(pagesQuantity)
    // if (pagesQuantity === 4) {
    //     return [1,2,3,4]
    // } else if (pagesQuantity < 4) {
    //     let buffer = Array.from(Array(pagesQuantity + 1).keys())
    //     buffer.shift()
    //     return buffer
    // } else if (pagesQuantity > 4) {
    //     if (currentPage + 4 === pagesQuantity) {
    //         pagesArray = [currentPage, currentPage + 1, currentPage + 2, currentPage + 3, pagesQuantity]
    //     }
    //     if (currentPage + 3 === pagesQuantity) {
    //         pagesArray = [currentPage - 1, currentPage, currentPage + 1, currentPage + 2, pagesQuantity]
    //     }
    //     if (currentPage + 2 === pagesQuantity) {
    //         pagesArray = [currentPage - 2,currentPage - 1, currentPage, currentPage + 1, pagesQuantity]
    //     }
    //     if (currentPage + 1 === pagesQuantity) {
    //         pagesArray = [currentPage - 3, currentPage - 2, currentPage - 1, currentPage, pagesQuantity]
    //     }
    //     if (currentPage === pagesQuantity) {
    //         pagesArray = [currentPage - 4, currentPage - 3, currentPage - 2, currentPage - 1, currentPage]
    //     } else if (currentPage === 1) {
    //         pagesArray = [currentPage, currentPage + 1, currentPage + 2, currentPage + 3, pagesQuantity]
    //     } else {
    //         pagesArray = [currentPage - 1, currentPage, currentPage + 1, currentPage + 2, pagesQuantity]
    //     }
    // }
    console.log(pagesArray)
    return pagesArray
}

