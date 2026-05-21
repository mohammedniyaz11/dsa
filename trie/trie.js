
var Trie = function () {
    this.root = {
        children: {},
        isEndOfTheWord: false
    }
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let node = this.root;
    for (let char of word) {
        if (!node.children[char]) {
            node.children[char] = {
                children: {},
                isEndOfTheWord: false
            }
        }
        node = node.children[char]
    }
    node.isEndOfTheWord = true

};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let node = this.root;
    for (let char of word) {
        if (!node.children[char]) {
            return false
        }
        node = node.children[char]
    }
    return node.isEndOfTheWord;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let node = this.root;
    for (let word of prefix) {
        if (!node.children[word]) {
            return false;
        }
        node = node.children[word]
    }

    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */