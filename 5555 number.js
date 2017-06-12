var n = Number(prompt("Enter the number"));
var count = 0;

if (0 < n && n <= 9999) {
    while (n > 0) {
        if (n % 10 == 5) {
            count++;
        }
        n = parseInt(n / 10);
    }
    console.log(count);
}
else {
    console.log("re-enter");

}
