# Selection sort

In computer science, selection sort is an in-place comparison sorting algorithm. It has an O(n<sup>2</sup>) time complexity, which makes it inefficient on large lists, and generally performs worse than the similar insertion sort. Selection sort is noted for its simplicity and has performance advantages over more complicated algorithms in certain situations, particularly where auxiliary memory is limited.

## Pseudocode
```
function select(list[1..n], k)
    for i from 1 to k
        minIndex = i
        minValue = list[i]
        for j from i+1 to n do
            if list[j] < minValue then
                minIndex = j
                minValue = list[j]
                swap list[i] and list[minIndex]
    return list[k]
```

## Visualization

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif)
![Algorithm Visualization](https://programmercave0.github.io/assets/selectionsort.png)

## Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: |
| **Insertion sort**    | n<sup>2</sup>   | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Yes       |

## References
[Wikipedia1](https://en.wikipedia.org/wiki/Selection_sort)
[Wikipedia2](https://en.wikipedia.org/wiki/Selection_algorithm)

