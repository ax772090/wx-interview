let obj = {
    a: 1,
    b: 2
}
Object.prototype.c = 3
for (const item in obj) {
    console.log(item);
}
/**
 * for...in会遍历原型上的属性，一般用来遍历对象，并且需要使用hasOwnProperties属性判断
 * for...of用来遍历可迭代对象，什么是可迭代对象呢？具有symbol.iterator属性，如：
 */
const obj2 = {
    val: 2,
    [Symbol.iterator]() {
        return {
            next() {
                return {
                    value: obj2.val++,
                    done: obj2.val > 10 ? true : false
                }
            }
        }
    }
}
for (const item of obj2) {
    console.log(item);
}