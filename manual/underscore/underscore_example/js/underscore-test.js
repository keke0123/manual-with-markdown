
let test_array_04 = [
    {
        num: 1,
        name: '김구라',
    },
    {
        num: 1,
        name: '해골',
    },
    {
        num: 2,
        name: '원숭이',
    },
    {
        num: 2,
        name: '덩어리',
    },
    {
        num: 3,
        name: '범',
    }
];

let kindergarten = ['tyrone', 'elie', 'aidan', 'sam', 'katrina', 'billie', 'timmy']


/*
    collections
*/
// each
test_each = function(){
    _.each([1, 2, 3], function(value, index, object){
        console.log('index');
        console.log(index);
        console.log('value');
        console.log(value);
        console.log('object');
        console.log(object);
    });
    
    _.each({one:'1', two:'2', three:'3'}, function(value, index, object){
        console.log('index');
        console.log(index);
        console.log('value');
        console.log(value);
        console.log('object');
        console.log(object);
    });
};

// map
test_map = function(){
    let temp_object = _.map([1, 2, 3], function(value, index, object){
        console.log('value');
        console.log(value);
        console.log('index');
        console.log(index);
        console.log('object');
        console.log(object);
        return value*3;
    });
    console.log('temp_object');
    console.log(temp_object);
    console.log('-----------------------------------------------');
    temp_object = _.map({one:'1', two:'2', three:'3'}, function(value, key, object){
        console.log('value');
        console.log(value);
        console.log('key');
        console.log(key);
        console.log('object');
        console.log(object);
        return value*3;
    });
    console.log('temp_object');
    console.log(temp_object);
    console.log('-----------------------------------------------');
    temp_object = _.map([[1,2], [3,4]], _.first);
    console.log('temp_object');
    console.log(temp_object);
};

// reduce
test_reduce = function(){
    let temp_sum = _.reduce([1, 2, 3], function(sum, value, index, object){
        console.log('sum');
        console.log(sum);
        console.log('value');
        console.log(value);
        console.log('index');
        console.log(index);
        console.log('object');
        console.log(object);
        return sum+value;
    }, 0);
    console.log('temp_sum');
    console.log(temp_sum);
};

// reduceRight
test_reduceRight = function(){
    let temp_sum = _.reduceRight([[0, 1], [2, 3], [4, 5]], function(sum, value, index, object){
        console.log('sum');
        console.log(sum);
        console.log('value');
        console.log(value);
        console.log('index');
        console.log(index);
        console.log('object');
        console.log(object);
        return sum.concat(value);
    }, []);
    console.log('temp_sum');
    console.log(temp_sum);
};

// find
test_find = function(){
    let temp_item = _.find([1, 2, 3, 4, 5, 6], function(value, index, object){
        console.log('value');
        console.log(value);
        console.log('index');
        console.log(index);
        console.log('object');
        console.log(object);
        return value % 2 == 0;
    });
    console.log('temp_item');
    console.log(temp_item);
    
};

// filter
test_filter = function(){
    let temp_item = _.filter([1, 2, 3, 4, 5, 6], function(value, index, object){
        console.log('value');
        console.log(value);
        console.log('index');
        console.log(index);
        console.log('object');
        console.log(object);
        return value % 2 == 0;
    });
    console.log('temp_item');
    console.log(temp_item);
};

// findWhere
test_findWhere = function(){
    let temp_item = _.findWhere(test_array_04, {num:2});
    console.log('temp_item');
    console.log(temp_item);
};

// Where
test_where = function(){
    let temp_object = _.where(test_array_04, {num:2});
    console.log('temp_object');
    console.log(temp_object);
    temp_object = _.where(test_array_04, {num:2, name:'덩어리'});
    console.log('temp_object');
    console.log(temp_object);
};

// reject
test_reject = function(){
    let temp_object = _.reject([1, 2, 3, 4, 5, 6], function(value, index, object){
        console.log('value');
        console.log(value);
        console.log('index');
        console.log(index);
        console.log('object');
        console.log(object);
        return value % 2 == 0;
    });
    console.log('temp_object');
    console.log(temp_object);
};

// every
test_every = function(){
    let temp_boolean = _.every([2, 5, 4], function(value, index, object){
        console.log('value');
        console.log(value);
        console.log('index');
        console.log(index);
        console.log('object');
        console.log(object);
        return value % 2 == 0;
    });
    console.log('temp_boolean');
    console.log(temp_boolean);
};

// some / 하나라도 참이면 true
test_some = function(){
    let temp_boolean = _.some([null, 0, 'yes', false]);
    console.log('temp_boolean');
    console.log(temp_boolean);
    temp_boolean = _.some([2, 5, 4], function(value){
        return value % 6 === 0;
    });
    console.log(temp_boolean);
};

// contains / list 가 value 값을 포함하고 있으면 true
test_contains = function(){
    let temp_boolean = _.contains([1, 2, 3], 3);
    console.log('temp_boolean');
    console.log(temp_boolean);
};

// invoke / list 에서 methodName 을 정의하면 해당 method 를 이용 return 값 반환
// _.invoke(list, methodName, *arguments) / list.methodName(*arguments)
test_invoke = function(){
    let temp_object = _.invoke([[5,1,7], [3,2,1]], 'sort');
    console.log('temp_object');
    console.log(temp_object);
};

// pluck
test_pluck = function(){
    let temp_object = _.pluck(test_array_04, 'name');
    console.log('temp_object');
    console.log(temp_object);
};

// max
test_max = function(){
    let temp_object = _.max(test_array_04, function(value){
        console.log('value');
        console.log(value);
        return value.num;
    });
    console.log('temp_object');
    console.log(temp_object);
};

// min
test_min = function(){
    let temp_object = _.min([1, 2, 3, 4, 5, 6]);
    console.log('temp_object');
    console.log(temp_object);
    temp_object = _.min(test_array_04, function(value){
        console.log('value');
        console.log(value);
        return value.num;
    });
    console.log('temp_object');
    console.log(temp_object);
};

// sortBy
test_sortBy = function(){
    let temp_object = _.sortBy([1, 2, 3, 4, 5, 6], function(value){
        return Math.sin(value);
    });
    console.log('temp_object');
    console.log(temp_object);
};

// groupBy
test_groupBy = function(){
    let temp_object = _.groupBy([1.2, 2.4, 2.6], function(value){
        return Math.floor(value);
    });
    console.log('temp_object');
    console.log(temp_object);
    temp_object = _.groupBy(['one', 'two', 'three'], 'length'
    );
    console.log('temp_object');
    console.log(temp_object);

};

// indexBy
test_indexBy = function(){
    let temp_object = _.indexBy(test_array_04, 'name');
    console.log('temp_object');
    console.log(temp_object);
    // id 값으로 해야되나봄
    temp_object = _.indexBy(test_array_04, 'num');
    console.log('temp_object');
    console.log(temp_object);
};

// countBy
test_countBy = function(){
    let temp_object = _.countBy([1, 2, 3, 4, 5, 6], function(value){
        return value % 2 == 0 ? 'even' : 'odd';
    });
    console.log('temp_object');
    console.log(temp_object);
};

// shuffle
test_shuffle = function(){
    let temp_object = _.shuffle([1, 2, 3, 4, 5, 6]);
    console.log('temp_object');
    console.log(temp_object);
};

// sample
test_sample = function(){
    let temp_object = _.sample([1, 2, 3, 4, 5, 6]);
    console.log('temp_object');
    console.log(temp_object);
    temp_object = _.sample([1, 2, 3, 4, 5, 6], 3);
    console.log('temp_object');
    console.log(temp_object);
};

// toArray
test_toArray = function(){
    let temp_object = function(){
        return _.toArray(arguments).slice(1);
    };
    console.log(temp_object(1,2,3));
    console.log((function(){ return _.toArray(arguments).slice(2); })(1, 2, 3, 4));
};

// size
test_size = function(){
    console.log(_.size([1, 2, 3, 4, 5, 6]));
    console.log(_.size({one:'1', two:'2', three:'3'}));
};

// partition
test_partition = function(){
    let temp_object = _.partition([1, 2, 3, 4, 5, 6], function(value){
        return value % 2 == 0;
    });
    console.log(temp_object);
};

// compact
test_compact = function(){
    let temp_object = _.compact([0, 1, false, 2, '', 3, 'hihi']);
    console.log(temp_object);
};


/*
    Arrays
*/
// first
test_first = function(){
    let temp_item = _.first([1, 2, 3, 4, 5, 6]);
    console.log(temp_item);
    temp_item = _.first([1, 2, 3, 4, 5, 6], 2);
    console.log(temp_item);
};

// initial
test_initial = function(){
    let temp_object = _.initial([1, 2, 3, 4, 5, 6]);
    console.log(temp_object);
    temp_object = _.initial([1, 2, 3, 4, 5, 6], 2);
    console.log(temp_object);
};

// last
test_last = function(){
    let temp_object = _.last([1, 2, 3, 4, 5, 6]);
    console.log(temp_object);
    temp_object = _.last([1, 2, 3, 4, 5, 6], 2);
    console.log(temp_object);
};

// rest
test_rest = function(){
    let temp_object = _.rest([1, 2, 3, 4, 5, 6]);
    console.log(temp_object);
    temp_object = _.rest([1, 2, 3, 4, 5, 6], 2);
    console.log(temp_object);
};

// flatten
// 조금 오작동이 있는듯 하다 3번과 4번 수행을 보면 알 수 있다.
test_flatten = function(){
    let temp_object = _.flatten([1, [2], [3, [[4]]]]);
    console.log(temp_object);
    temp_object = _.flatten([1, [2], [3, [[4]]]], true);
    console.log(temp_object);
    temp_object = _.flatten(temp_object, true);
    console.log(temp_object);
    temp_object = _.flatten(temp_object, true);
    console.log(temp_object);
};

// without
test_without = function(){
    let temp_object = _.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
    console.log(temp_object);
};

// union / 합집합
test_union = function(){
    let temp_object = _.union([1,2,3], [101, 2, 1, 10], [2, 1]);
    console.log(temp_object);
};

// intersection / 교집합
test_intersection = function(){
    let temp_object = _.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);
    console.log(temp_object);
};

// difference / 차집합
test_difference = function(){
    let temp_object = _.difference([1, 2, 3, 4, 5], [5, 2, 10]);
    console.log(temp_object);
};

// uniq / 중복되는 값 삭제하고 각 1개씩만
test_uniq = function(){
    let temp_object = _.uniq([1,2,1,4,1,3]);
    console.log(temp_object);
};

// zip / 배열의 인덱스를 기준으로 묶어서 배열을 만들어 준다. [array(1), array(2), array(3)] 이런 형식
test_zip = function(){
    let temp_object = _.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
    console.log(temp_object);
};

// unzip / zip 으로 묶은걸 풀어준다.
test_unzip = function(){
    let temp_object = _.unzip([['moe', 30, true], ['larry', 40, false], ['curly', 50, false]]);
    console.log(temp_object);
};

// object / 배열을 오브젝트로 만들어 주는 함수
test_object = function(){
    let temp_object = _.object(['moe', 'larry', 'curly'], [30, 40, 50]);
    console.log(temp_object);
    temp_object = _.object([['moe', 30], ['larry', 40], ['curly', 50]]);
    console.log(temp_object);
};


// chunk / random 으로 섞은뒤에 짤라서 배열을 만들수 있다.
test_chunk = function(){
    let temp_object = _.chunk(_.shuffle(kindergarten), 2);
    console.log(temp_object);
};

// indexOf / value 를 배열에서 찾아서 index 를 알려준다.
test_indexOf = function(){
    let temp_object = _.indexOf([1,2,3,2], 2);
    console.log(temp_object);
};

// lastIndexOf / 
test_lastIndexOf = function(){
    let temp_object = _.lastIndexOf([1,2,3,1,2,3], 2);
    console.log(temp_object);
};

// sortedIndex
test_sortedIndex = function(){
    let temp_object = _.sortedIndex([10, 20, 30, 40, 50], 35);
    console.log(temp_object);
    let stooges = [{name: 'moe', age: 40}, {name: 'curly', age: 60}];
    temp_object = _.sortedIndex(stooges, {name:'larry', age: 50}, 'age');
    console.log(temp_object);
};

// findIndex / 만약에 못찾으면 return -1
test_findIndex = function(){
    let temp_object = _.findIndex([4, 6, 8, 12], function(value, index, array){
        console.log('value');
        console.log(value);
        console.log('index');
        console.log(index);
        console.log('array');
        console.log(array);
        return value % 6 === 0;
    });
    console.log(temp_object);
}

// findLastIndex
test_findLastIndex = function(){
    let temp_object = _.findLastIndex([4, 6, 8, 12], function(value, index, array){
        console.log('value');
        console.log(value);
        console.log('index');
        console.log(index);
        console.log('array');
        console.log(array);
        return value % 8 === 0;
    });
    console.log(temp_object);
}

// range
test_rage = function(){
    let temp_object = _.range(10);
    console.log(temp_object);
    temp_object = _.range(1,11);
    console.log(temp_object);
    temp_object = _.range(0,30,5);
    console.log(temp_object);
    temp_object = _.range(0,-10,-1);
    console.log(temp_object);
    temp_object = _.range(0);
    console.log(temp_object);
}


/*
    Function / 이쪽은 진짜 잘 이해 안간다.
*/
// bind
test_bind = function(){
    let func = function(greeting){
        console.log(greeting + " : " + this.name);
        return greeting + " : " + this.name;
    }
    func = _.bind(func, {name:'moe'}, 'hi');
    func();
};

// bindAll
test_bindAll = function(){
    let buttonView = {
        label : 'underscore',
        onClick : function(){
            alert('clicked : '+this.label);
        },
        onHover: function(){
            console.log('hovering : '+this.label);
        }
    };
    _.bindAll(buttonView, 'onClick', 'onHover');
};

// partial
test_partial = function(){
    let subtract = function(a, b) {
        return b - a;
    }
    let sub5 = _.partial(subtract, 5);
    console.log(sub5(20));
};

// memoize
test_memoize = function(){
    fibonacci = _.memoize(function(n){

        return n > 2 ? n : fibonacci(n-1) + fibonacci(n-2);
    });
    console.log(fibonacci(5));
};

// delay
test_delay = function(){
    let log = _.bind(console.log, console);
    _.delay(log, 1000, 'logged later');
};

// defer
test_defer = function(){
    _.defer(function(){
        alert('deferred');
    });
};

// throttle
test_throttle = function(){
    let throttled = _.throttle(1000, 100);
    $(window).scroll(throttled);
};


























