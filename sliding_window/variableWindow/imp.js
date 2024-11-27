/** @format */

// https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/2133524/java-c-a-reall-detailed-explanation/?envType=problem-list-v2&envId=sliding-window&
/*
while(j < size()){

    // Calculation's happen's here
-----------------------------------------------
    if(condition < k){
        j++;
    }
-----------------------------------------------

-----------------------------------------------
    else if(condition == k){
        // ans <-- calculation
        
        j++; //just increment j
    }
----------------------------------------------

----------------------------------------------
    else if(condition > k){
        while(condition > k){
            // remove calculation for i
            i++;
        }
        j++;
    }
----------------------------------------------
}
return ans;
*/
