export function counter(){
    let count = 0;
    return function(){
        count++;
        return count
    }
}

let closure_ex = counter();
closure_ex();
closure_ex();
closure_ex();
closure_ex();
console.log(closure_ex());

