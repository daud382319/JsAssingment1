function kilometerToMeter(kilometer)
{
    var meter = kilometer * 1000;
    return meter;
}
var outPut = kilometerToMeter(5);
console.log(outPut);


//bugetCalculator
function bugetCalculator(num1,num2,num3){
    var watch =num1*50;
    var phone=num2*100;
    var leptop=num3*500;
    var total=watch+phone+leptop;
    return total;
}
var buget =bugetCalculator(5,2,3);
console.log(buget);
//hotelCost
function hotelCost(day){
    if(day<=10){
        var cost=day*100;
        return cost;
    }
    else if(day<=20){
        var cost =day*80;
        return cost;

    }
    else {
        var cost=day*50;
        return cost;
    }
}
var finalCost=hotelCost(30
    );
console.log(finalCost);
// megaFriend
function megaFriend(friend){
    var longest='';
    friend.map(function(str){
        if(str.length>longest.length){
            longest=str;
        }

    })
    return longest;
}
var longestName=megaFriend(['Muhamad Daud','Rakib','Johir']);
console.log(longestName);
















































































