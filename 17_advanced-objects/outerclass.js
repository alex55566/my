class Cars {
    constructor(param) {
        this.car = param.car
    }
}

class BrandName extends Cars { }

export class Model extends BrandName {
    a = 1
    b = 2
    c = 3
}