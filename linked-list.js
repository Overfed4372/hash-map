import {Node} from "./node.js";
export function LinkedList () {
    let listHead = Node();
    const importList = (list) => {
        listHead = list;
    }
    const exportList = () => listHead;
    const append = (key, value) => {
        let tmp;
        (function lastNode (node) {
            if (node.key === null) {
                tmp = node;
                return
            }
            return lastNode(node.nextNode);
        })(listHead);
       tmp.key = key, 
       tmp.value = value, 
       tmp.nextNode = Node();
    }
    const replaceOrAppend = (key, value) => {
        (function traverseList (node) {
            if (node.key === key) {
                node.value = value;
                return;
            }
            if (!node.nextNode) {
                append(key, value);
                return;
            }
            return traverseList(node.nextNode);
        })(listHead);
    }
    const findKey = (key) => {
        return (function traverseList (node) {
            if (node.key === key) {
                return node.value;
            }
            if (!node.nextNode.nextNode) {
                return null;
            }
            return traverseList(node.nextNode);
        })(listHead);
    }
    const hasKey = (key) => {
        return (function traverseList (node) {
            if (node.key === key) {
                return true;
            }
            if (!node.nextNode.nextNode) {
                return false;
            }
            return traverseList(node.nextNode);
        })(listHead);
    }
    const removeKey = (key) => {
        let counter = 0;
        return (function traverseList (node) {
            if (node.key === key && counter === 0) {
                listHead=listHead.nextNode;
                return true;
            }
            if (node.key === key) {
                node = node.nextNode;
                return true;
            }
            if (!node.nextNode.key) {
                return false;
            }
            counter += 1;
            return traverseList(node.nextNode);
        })(listHead);
    }
    const getAllKeys = () => {
        const keys = [];
        return (function traverseList (node) {
            if (node.key) keys.push(node.key);
            if (!node.key) {
                return keys;
            }
            return traverseList(node.nextNode);
        })(listHead);
    }
    const getAllValues = () => {
        const values = [];
        return (function traverseList (node) {
            if (node.key) values.push(node.value);
            if (!node.key) {
                return values;
            }
            return traverseList(node.nextNode);
        })(listHead);
    }
    const getAllPairs = () => {
        const pairs = [];
        return (function traverseList (node) {
            if (node.key) pairs.push([node.key, node.value]);
            if (!node.key) {
                return pairs;
            }
            return traverseList(node.nextNode);
        })(listHead);
    }
    const toString = () => {
        let listString = "";
        //Traverse through list items
        (function traverseList (node) {
            if (node.nextNode === null) return
            listString += " => " + String(node.value);
            return traverseList(node.nextNode);
        })(listHead);
        //Remove first pointer icon
        return listString.slice(4);
    }
    const prepend = (value) => {
        let tmp = Node(value);
        tmp.nextNode = listHead;
        listHead = tmp;
    }
    const size = () => {
        let totalSize = 0;
        (function traverseList (node) {
            totalSize = node.value !== null ? totalSize + 1 : totalSize;
            if (node.nextNode === null) {
                return;
            }
            return traverseList(node.nextNode);
        })(listHead);
        return totalSize;
    }
    const head = () => {
        return listHead.value;
    }
    const tail = () => {
        return (function traverseList (node) {
            if (!node.nextNode.nextNode) {
                return node.value;
            }
            return traverseList(node.nextNode);
        })(listHead);
    }
    const at = (index) => {
        let counter = 0;
        return (function traverseList (node) {
            if (node.nextNode === null) {
                return (`Index ${index} is out of range`);
            }
            if (counter === index) {
                return node.value;
            }
            counter += 1;
            return traverseList(node.nextNode);
        })(listHead);
    }
    const pop = () => {
        (function traverseList (node) {
            if (!node.nextNode.nextNode.nextNode) {
                node.nextNode = Node();
                return;
            }
            return traverseList(node.nextNode);
        })(listHead);
    }
    const contains = (value) => {
        return (function traverseList (node) {
            if (node.value === value) {
                return true;
            }
            if (!node.nextNode.nextNode) {
                return false;
            }
            return traverseList(node.nextNode);
        })(listHead);
    }
    const find = (value) => {
        let index = 0;
        return (function traverseList (node) {
            if (node.value === value) {
                return index;
            }
            if (!node.nextNode.nextNode) {
                return false;
            }
            index += 1;
            return traverseList(node.nextNode);
        })(listHead);
    }
    const insertAt = (value, index) => {
        let counter = 0;
        if (index === 0) prepend(value);
        (function traverseList (node) {
            if (counter === index-1) {
                const newNode = Node(value,node.nextNode);
                node.nextNode = newNode;
                return;
            }
            if (!node.nextNode.nextNode) {
                return (`Index ${index} is out of range`);
            }
            counter += 1;
            return traverseList(node.nextNode);
        })(listHead);
    }
    const remvoeAt = (index) => {
        let counter = 0;
        if (index === 0) {
            (() => {
                listHead = listHead.nextNode;
            })();
        }
        (function traverseList (node) {
            if (counter === index-1) {
                node.nextNode = node.nextNode.nextNode;
                return;
            }
            if (!node.nextNode.nextNode) {
                return (`Index ${index} is out of range`);
            }
            counter += 1;
            return traverseList(node.nextNode);
        })(listHead);
    }
    return {Node, exportList, importList, append, replaceOrAppend, findKey, hasKey, removeKey, getAllKeys, getAllValues, getAllPairs};
}
// const a = LinkedList();
// // a.importList({key:"Amir", value:"Jaraedi", nextNode:{key:null, value:null, nextNode:null}});
// a.importList({key:"Amir", value:"Jaraedi", nextNode:{key:null, value:null, nextNode:null}});
// // a.append("Ahmad", "Nabav");
// a.replaceOrAppend("Amirj", "Khar"); 
// console.log(a.exportList());