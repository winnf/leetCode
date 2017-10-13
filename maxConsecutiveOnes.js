var maxConsecutiveOnes = function(nums){
    var result = 0;
    var count = 0;
    for (var i=0; i<nums.length; i++){
        if(nums[i] == 1){
            count++;
            result = Math.max(count, result);
        } else {
            count = 0;
        }
    }
    return result;
};
