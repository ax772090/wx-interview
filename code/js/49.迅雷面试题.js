// 这段文字粘贴到编辑器）新建一个js文件，node环境调试。（可调试）
// 写一个函数 getNumber(min, max)，其中两个参数 min 和 max 都是整数（可以为负数），且 min < max。
// 随机返回一个 min 和 max 的左闭右闭区间内的整数值。
// 比如： getNumber(1, 3) =》返回 1, 2, 3 的其中任意一个值。

function getNumber(min, max) {
    // return Math.floor(Math.random() * (max - min) + min)
    return min;
}
// console.log(getNumber(1,3));
// （这段文字粘贴到编辑器，可调试）第二问：
// 1）我们先把 getNumber 函数代码在编辑器中收起来。
// 2）现在 getNumber 是你同事按照你的需求提供给你的函数，是一个黑盒。你不知道他写了啥。（重点1）
// 3）你需要写 一个函数来 test 来检测这个 getNumber 函数符不符合你的预期？（重点2）
// 如果返回 true，说明符合你的预期。返回 false 则说明不符合你的预期。
// 4）这题是开放题，没有标准答案，只要符合逻辑即可。

function test(min, max) {
    if (getNumber(min, max) < min || getNumber(min, max) > max) {
        return false
    }
    return true
}
console.log(test(1,4));