# javascript笔试题

### 1.编写一个数组去重的方法

```
// 方法一：
var arr = [1,3,43,43,45,1,3]
var obj = {}
var newArr = []

for(var i = 0, len = arr.length; i < len; i++) {
  if(!obj[arr[i]]) {
    obj[arr[i]] = true;
    newArr.push(arr[i])
  }
}

// 方法二：
newArr = [arr[0]]
for(var i = 1, len = arr.length; i < len; i++) {
  if(newArr.indexOf(arr[i]) <= -1) {
    newArr.push(arr[i])
  }
}
```

### 2.二分法查找

```
var ary=[1,4,7,8,12]
function getIndex(arr, num) {
  var start = 0;
  var end = arr.length - 1;
  var mid = 0;
  console.log(start, end)
  while(start <= end) {
    console.log(start, end)
    var mid = Math.floor((end + start) / 2)

    if(arr[mid] === num) {
      return mid
    } else if(arr[mid] > num) {
      end = mid - 1
    } else if(arr[mid] < num) {
      start = mid + 1
    }
  }

  return -1

}

console.log(getIndex(ary, 0.1))
```

### 3.冒泡排序

```
var arr = [8, 6, 5, 9, 1, 4, 3];
function sort(arrList) {
  for(var i = 0, len = arrList.length; i < len; i++) {
    for(let j = 0; j < len - 1; j++) {
      if(arrList[j] > arrList[j + 1]) {
        var tem = arrList[j];
        arrList[j] = arrList[j + 1]
        arrList[j + 1] = tem
      }
    }
  }
  return arrList
}

console.log(sort(arr))
```