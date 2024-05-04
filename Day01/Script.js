var arr = [1, 2, 3, 4]
arr.forEach(function (val) {
    val = val + 2
    // console.log(val);
})
var ans = arr.filter((val) => {
    if (val > 2) {
        // console.log(val);
        return true
    }
    else return false
})
var map_ans = arr.map((val) => {
    console.log(
        val * 3
    );
})