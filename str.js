var strStr = function(haystack, needle) {
    if (needle === '') {
        return 0
    } else {
        for (i in haystack) {
            if (haystack.slice(i, Number(i) + needle.length) === needle) {
                return i
            }
        }
    }
    return -1
};

console.log(strStr('hello', 'll'))