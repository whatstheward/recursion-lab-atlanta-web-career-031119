// Code your solution here!

function printString(string){
    if(string.length > 1){
    console.log(string[0])
    printString(string.slice(1))
    }else{
        console.log(string[0])
    }
}

function reverseString(string){
    if(string===""){
        return ""
    }else{
        return reverseString(string.substr(1)) +string.charAt(0)
    }
}

function isPalindrome(string){
    if(string[0]!==string[string.length-1]){
        return false
    }else if(string.length > 1) {
        isPalindrome(string.slice(1,-1))
    }
    return true
}

function addUpTo(array, i){
    if(i > 0){
        return addUpTo(array, i-1) + array[i]
    }
        return array[i]
}

function maxOf(arr){
    if(arr.length == 1){
        return arr[0]
    }else if(arr[0] >= arr[1]){
        return maxOf(arr.slice(0,1).concat(arr.slice(2)))
    }else{
        return maxOf(arr.slice(1))
    }
}

function includesNumber(arr, n){
    if(arr.length == 0){
        return false
    }else if(arr[0] == n){
        return true
    }else{
        return includesNumber(arr.slice(1), n)
    }
}