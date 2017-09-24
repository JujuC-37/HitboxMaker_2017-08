// general functions, independent of project

// returns html element img from object (parameter) with attributes src, alt and title
export function createHtmlElementImg(image){
    let elementImg = `<img src="${image.src}" alt="${image.alt}" title="${image.title}">`;
    return elementImg;
}