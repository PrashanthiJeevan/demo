function add() {
    var a = [2, 3, 6, 3, -5];
    var i = 0, j = 1, k = 2;
    while (true) {
        if (a[i] + a[j] + a[k] == 0) {
            document.getElementById('output').innerHTML = a[i] + '+' + a[j] + '+' + a[k];
            break;
        }
        else {
            k++;
        }
    }
}