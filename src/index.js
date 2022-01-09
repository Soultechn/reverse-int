module.exports = function reverse (n) {
        let str = Math.abs(n) + '';
        let out = '';
        let i = str.length;
        for (i = str.length - 1; i >= 0 ; i = i - 1) {
          out = `${out}${str[i]}`;
        };
      return out
}
