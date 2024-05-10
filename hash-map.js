import { LinkedList } from "./linked-list.js";
export default class HashMap {
    constructor () {
        this.table = [];
        this.hashTable = [];
        this.totalSize = 20;
        this.occupiedSize = 0;
    }
    static #hash(key, tableSize) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % tableSize;
        }

        return hashCode;
    }
    #checkOccupiedSize () {
        if (this.occupiedSize / this.totalSize > 0.75) {
            this.totalSize *= 2;
        }
    }
    showTable () {
        return this.table;
    }
    set (key, value) {
        const index = HashMap.#hash(key, this.totalSize);
        const indexLinkedList = LinkedList();
        if (!this.table[index]) {
            this.table[index]=LinkedList().Node();
            this.hashTable.push(index);
            this.occupiedSize ++;
            this.#checkOccupiedSize();
        } 
        indexLinkedList.importList(this.table[index]);
        console.log("index", index);
        indexLinkedList.replaceOrAppend(key, value);
        this.table[index] = indexLinkedList.exportList();
    }
    get (key) {
        const index = HashMap.#hash(key, this.totalSize);
        if (!this.table[index]) return null;
        const indexLinkedList = LinkedList();
        indexLinkedList.importList(this.table[index]);
        return indexLinkedList.findKey(key);
    }
    has (key) {
        const index = HashMap.#hash(key, this.totalSize);
        if (!this.table[index]) return false;
        const indexLinkedList = LinkedList();
        indexLinkedList.importList(this.table[index]);
        return indexLinkedList.hasKey(key);
    }
    remove (key) {
        const index = HashMap.#hash(key, this.totalSize);
        let result;
        if (!this.table[index]) return false;
        const indexLinkedList = LinkedList();
        indexLinkedList.importList(this.table[index]);
        result = indexLinkedList.removeKey(key);   
        this.table[index] = indexLinkedList.exportList();
        return result;
    }
    length () {
        return this.keys().length;
    }
    clear () {
        this.table.splice(0);
    }
    keys () {
        const allKeys = [];
        const indexLinkedList = LinkedList();
        for (let index=0; index<this.hashTable.length; index++) {
            indexLinkedList.importList(this.table[this.hashTable[index]]);
            allKeys.push(...indexLinkedList.getAllKeys());
        }
        return allKeys;
    }
    values () {
        const allValues = [];
        const indexLinkedList = LinkedList();
        for (let index=0; index<this.hashTable.length; index++) {
            indexLinkedList.importList(this.table[this.hashTable[index]]);
            allValues.push(...indexLinkedList.getAllValues());
        }
        return allValues;
    }
    entries () {
        const allPairs = [];
        const indexLinkedList = LinkedList();
        for (let index=0; index<this.hashTable.length; index++) {
            indexLinkedList.importList(this.table[this.hashTable[index]]);
            allPairs.push(...indexLinkedList.getAllPairs());
        }
        return allPairs;
        
    }
}