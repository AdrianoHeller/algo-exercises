
function* fetchData(list){
    let fetcher = {
        current: 0,
        maxConcurrency:5,
        size:50,
        [Symbol.iterator](){
            return {
                current: this.current,
                maxConcurrency: this.maxConcurrency,
                size: this.size,
                next(){
                    if(this.current <= this.maxConcurrency){
                        yield this.current;
                        return {done: false, current: this.current += this.maxConcurrency};
                    }else{
                        return {done: true}
                    };
                }
            }
        }
    };

    for(let i= fetcher.current; i <= fetcher.maxConcurrency; i++){
        yield list[i];
    }

}