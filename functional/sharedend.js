function sharedEnd(array) {
    var B = array.map(function(b) {
        return b.split('').reverse().join('');
    });
    var A= B.concat().sort();
    var a1= A[0], a2= A[A.length-1], L= a1.length, i= 0;

    while(i<L && a1.charAt(i)=== a2.charAt(i))  {
        i++;
    }
    return a1.substring(0, i).split('').reverse().join('');
}

var end = sharedEnd(["div>p>a", "div>div>div>a", "div>div>a"]);
console.log(end);