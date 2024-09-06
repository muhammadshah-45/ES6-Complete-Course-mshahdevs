const MathLibrary = {
    calculateProduct (...rest){
        console.log("Please use the multiply method instead");
        return this.multiply(...rest);
    },
    multiply(a ,b ){
        return a * b;
    }

}
console.log(MathLibrary);