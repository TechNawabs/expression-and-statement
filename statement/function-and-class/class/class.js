const Rectangle = class {

    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

};

let data = new Rectangle(3, 8);
console.log("width: " + data.width + ", height: " + data.height + " area => " + data.area());