
/*
    Array
*/

// chunk / array 를 length 를 기준으로 나눈다
let test_chunk = function(){
    let result = _.chunk(['a', 'b', 'c', 'd'], 2);
    console.log(result);
    result = _.chunk(['a', 'b', 'c', 'd'], 3);
    console.log(result);
}

// compact / false, null, 0, '', undefined, NaN 등을 제거한다.
let test_compact = function(){
    let result = _.compact([0, 1, false, 2, '', 3, 'hi']);
    console.log(result);
}

// concat / array 를 붙여주지만 2중 배열은 한겹이 제거된채로 합쳐진다. 
let test_concat = function(){
    let array = [1];
    let result = _.concat(array, 2, [3], [[4]]);
    console.log(result);
    result = _.concat(result, [5]);
    console.log(result);
}

// difference / 차집합
let test_difference = function(){
    let result = _.difference([2, 1], [2, 3]);
    console.log(result);
}

// differenceBy
let test_differenceBy = function(){
    let result = _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
    console.log(result);
    result = _.differenceBy([{'x': 2}, {'x': 1}], [{'x': 1}], 'x');
    console.log(result);
}