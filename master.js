let min_num = prompt('Enter a min number between 1 & 10 : ')
let max_num = prompt('Enter a max number between 1 & 10 : ')
if(max_num > 10){
    alert('max number should be less than 10 !')
}
if(min_num > max_num){
    alert('max number should be more than min number !')
}
function loop(mn, mx){
    for(let i = 1 ; i <= mn ; i++){
        for(let j = 1 ; j <= mx ; j++){
        document.querySelector('body>.rows:nth-of-type('+i+')>div:nth-of-type('+j+')').innerHTML = i*j
        }
    }
}
loop(min_num , max_num)