# Shell sort

Shellsort, also known as Shell sort or Shell's method, is an in-place comparison sort. It can be seen as either a generalization of sorting by exchange (bubble sort) or sorting by insertion (insertion sort).[3] The method starts by sorting pairs of elements far apart from each other, then progressively reducing the gap between elements to be compared. By starting with far apart elements, it can move some out-of-place elements into position faster than a simple nearest neighbor exchange. Donald Shell published the first version of this sort in 1959.[4][5] The running time of Shellsort is heavily dependent on the gap sequence it uses. For many practical variants, determining their time complexity remains an open problem.

## Pseudocode

Using Marcin Ciura's gap sequence, with an inner insertion sort.

```
//Use Knut sequence
var shell_sort = function(array){
  var length = array.length;
  var h = 1;
  while( h < length / 3){
    h = 3 * h + 1;
  }
  while( h > 0 ){
    for ( var i = h; i < length; i++){
      for ( var j = i; j > 0 && array[j] < array[j-h]; j-=h){
        array.swap(j, j-h);
      }
   }
   //decreasing h
   h = — h / 3
  }
  return array;
};
```

## Visualization

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/d/d8/Sorting_shellsort_anim.gif)

## Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: |
| **Shell sort**        | n log(n)        | depend gap sequence | n<sup>2</sup>       | 1         | Yes       |

## References
[Wikipedia (RU)](https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0_%D0%A8%D0%B5%D0%BB%D0%BB%D0%B0)

[Medium (RU)](https://medium.com/@dimko1/%D0%B0%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC%D1%8B-%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B8-shell-sort-f7a5f75427c1#:~:text=Shell%20Sort%20%E2%80%94%20%D1%8D%D1%82%D0%BE%20%D1%82%D0%BE%D1%82%20%D0%B6%D0%B5,%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D1%8B%D0%B5%20%D0%BD%D0%B0%D1%85%D0%BE%D0%B4%D1%8F%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D1%80%D0%B0%D1%81%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D0%B8%20D.)

[YouTube](https://www.youtube.com/watch?v=j64RmFUsHAQ)

