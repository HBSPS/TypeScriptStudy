type Words = {
    [key: string]: string
}

class Dict {
    private words: Words
    constructor() {
        this.words = {}
    }
    add(word: Word) {
        if (this.words[word.term] === undefined) {
            this.words[word.term] = word.get;
        }
    }
    get(term: string) {
        return this.words[term]
    }
    update(word: Word, word2: string) {
        this.words[word.term] = word2;
    }
    showAll() {
        return this.words
    }
    count() {
        const obj = this.words
        return Object.keys(obj).length;
    }
    del(word: Word) {
        delete this.words[word.term]
    }
}

class Word {
    constructor(
        public term: string,
        public get: string
    ) { }
}

const kimchi = new Word("kimchi", "한국 음식");
const cookie = new Word("Cookie", "바삭바삭");
const jelly = new Word("Jelly", "말랑말랑");


const dict = new Dict()

// dict.add(kimchi); // add
// dict.get("kimchi"); // get

// dict.update(kimchi, "맛있음") // update
// dict.get("kimchi")

// dict.add(cookie);
// dict.add(jelly);

// dict.showAll() // showAll

// dict.count() // count

// dict.del(kimchi) // delete
// dict.showAll()