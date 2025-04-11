import { catalog } from './catalog.js';

const selectedCentury = 20;
const keyword = 'История';

console.log(catalog);

function extractLanguages() {
    let languages = [];
    for (let i = 0; i < catalog.length; i++) {
        if (!languages.includes(catalog[i].language)) {
            languages.push(catalog[i].language);
        }
    }
    return languages;
}

console.log(extractLanguages());

function filterBooksByCentury(centuryNum) {
    let filteredBooks = [];
    for (let i = 0; i < catalog.length; i++) {
        const publicationYear = catalog[i].year;
        if (publicationYear > (centuryNum - 1) * 100 && publicationYear < centuryNum * 100) {
            filteredBooks.push(catalog[i].title);
        }
    }
    return filteredBooks;
}

console.log(filterBooksByCentury(selectedCentury));

function searchCatalog(query) {
    let matches = [];
    for (let i = 0; i < catalog.length; i++) {
        const authorName = catalog[i].author;
        const bookName = catalog[i].title;
        if (
            authorName.includes(query) ||
            authorName.toLowerCase().includes(query.toLowerCase())
        ) {
            matches.push(`${catalog[i].author} - ${catalog[i].title}`);
        } else if (
            bookName.includes(query) ||
            bookName.toLowerCase().includes(query.toLowerCase())
        ) {
            matches.push(`${catalog[i].author} - ${catalog[i].title}`);
        }
    }
    return matches;
}

console.log(searchCatalog(keyword));import { catalog } from './catalog.js';

const selectedCentury = 20;
const keyword = 'История';

console.log(catalog);

function extractLanguages() {
    let languages = [];
    for (let i = 0; i < catalog.length; i++) {
        if (!languages.includes(catalog[i].language)) {
            languages.push(catalog[i].language);
        }
    }
    return languages;
}

console.log(extractLanguages());

function filterBooksByCentury(centuryNum) {
    let filteredBooks = [];
    for (let i = 0; i < catalog.length; i++) {
        const publicationYear = catalog[i].year;
        if (publicationYear > (centuryNum - 1) * 100 && publicationYear < centuryNum * 100) {
            filteredBooks.push(catalog[i].title);
        }
    }
    return filteredBooks;
}

console.log(filterBooksByCentury(selectedCentury));

function searchCatalog(query) {
    let matches = [];
    for (let i = 0; i < catalog.length; i++) {
        const authorName = catalog[i].author;
        const bookName = catalog[i].title;
        if (
            authorName.includes(query) ||
            authorName.toLowerCase().includes(query.toLowerCase())
        ) {
            matches.push(`${catalog[i].author} - ${catalog[i].title}`);
        } else if (
            bookName.includes(query) ||
            bookName.toLowerCase().includes(query.toLowerCase())
        ) {
            matches.push(`${catalog[i].author} - ${catalog[i].title}`);
        }
    }
    return matches;
}

console.log(searchCatalog(keyword));