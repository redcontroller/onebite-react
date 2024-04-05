import getParagraph, {getRandomName, getRandomEmail, getSentence, getPhone} from "./random.js";

const name1 = getRandomName();
const name2 = getRandomName();
const name3 = getRandomName();
console.log(name1, name2, name3);

const email1 = getRandomEmail();
const email2 = getRandomEmail();
const email3 = getRandomEmail();
console.log(email1, email2, email3);

const paragraph1 = getParagraph();
const paragraph2 = getParagraph();
const paragraph3 = getParagraph();
console.log(paragraph1, paragraph2, paragraph3);

const sentence1 = getSentence();
const sentence2 = getSentence();
const sentence3 = getSentence();
console.log(sentence1, sentence2, sentence3);

const phone1 = getPhone();
const phone2 = getPhone();
const phone3 = getPhone();
console.log(phone1, phone2, phone3);