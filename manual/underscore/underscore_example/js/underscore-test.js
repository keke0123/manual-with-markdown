
let test_array_01 = [1, 2, 3];
let test_array_02 = [[0, 1], [2, 3], [4, 5]];
let test_array_03 = [1, 2, 3, 4, 5, 6];
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
let test_array_05 = [2, 5, 4];
let test_array_06 = [null, 0, 'yes', false];
let test_array_07 = [1.2, 2.4, 2.6];
let test_array_08 = ['one', 'two', 'three'];
let test_object_01 = {one:'1', two:'2', three:'3'};

/*
    collections
*/
// each
test_each = function(){
    _.each(test_array_01, function(value, index, object){
        console.log('index');
        console.log(index);
        console.log('value');
        console.log(value);
        console.log('object');
        console.log(object);
    });
    
    _.each(test_object_01, function(value, index, object){
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
    let temp_object = _.map(test_array_01, function(value, index, object){
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
    temp_object = _.map(test_object_01, function(value, key, object){
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
    let temp_sum = _.reduce(test_array_01, function(sum, value, index, object){
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
    let temp_sum = _.reduceRight(test_array_02, function(sum, value, index, object){
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
    let temp_item = _.find(test_array_03, function(value, index, object){
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
    let temp_item = _.filter(test_array_03, function(value, index, object){
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
    let temp_object = _.reject(test_array_03, function(value, index, object){
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
    let temp_boolean = _.every(test_array_05, function(value, index, object){
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
    let temp_boolean = _.some(test_array_06);
    console.log('temp_boolean');
    console.log(temp_boolean);
    temp_boolean = _.some(test_array_05, function(value){
        return value % 6 === 0;
    });
    console.log(temp_boolean);
};

// contains / list 가 value 값을 포함하고 있으면 true
test_contains = function(){
    let temp_boolean = _.contains(test_array_01, 3);
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
    let temp_object = _.min(test_array_03);
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
    let temp_object = _.sortBy(test_array_03, function(value){
        return Math.sin(value);
    });
    console.log('temp_object');
    console.log(temp_object);
};

// groupBy
test_groupBy = function(){
    let temp_object = _.groupBy(test_array_07, function(value){
        return Math.floor(value);
    });
    console.log('temp_object');
    console.log(temp_object);
    temp_object = _.groupBy(test_array_08, 'length'
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
    let temp_object = _.countBy(test_array_03, function(value){
        return value % 2 == 0 ? 'even' : 'odd';
    });
    console.log('temp_object');
    console.log(temp_object);
};

// shuffle
test_shuffle = function(){
    let temp_object = _.shuffle(test_array_03);
    console.log('temp_object');
    console.log(temp_object);
};

// sample
test_sample = function(){
    let temp_object = _.sample(test_array_03);
    console.log('temp_object');
    console.log(temp_object);
    temp_object = _.sample(test_array_03, 3);
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
    console.log(_.size(test_array_03));
    console.log(_.size(test_object_01));
};

// partition
test_partition = function(){
    let temp_object = _.partition(test_array_03, function(value){
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
    let temp_item = _.first(test_array_03);
    console.log(temp_item);
    temp_item = _.first(test_array_03, 2);
    console.log(temp_item);
};

// initial
test_initial = function(){
    let temp_object = _.initial(test_array_03);
    console.log(temp_object);
    temp_object = _.initial(test_array_03, 2);
    console.log(temp_object);
};

test_last = function(){
    let temp_object = _.last(test_array_03);
    
}