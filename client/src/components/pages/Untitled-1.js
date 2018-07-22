function(a) {
    return function () {
        return a;
    }
}
for (var i = 0; i < 3; i++) {
    (function (i) {
        x[i] = function () { 
            return i; 
        }
    })(i);
}
x[0]();