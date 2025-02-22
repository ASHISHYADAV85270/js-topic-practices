# Polyfills

**Array Polyfills**

- forEach
    ```js
    Array.prototype.myForEach = function (callback) {
        if (!callback) {
            throw Error("myForEach : undefined is not a function");
        }
        const arr = this;
        for (let i = 0; i < arr.length; i++) {
            callback(arr[i], i, arr);
        }
    };
    ```

- map
    ```js
    Array.prototype.myMap = function (callback) {
        if (!callback) {
            throw Error("myMap: no callback provided");
        }
        let arr = this;
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            const result = callback(arr[i], i, arr);
            newArr.push(result);
        }
        return newArr;
    };
    ```

- filter
    ```js
    Array.prototype.myFilter = function (callback) {
        if (!callback) {
            throw Error("myFilter: no callback provided");
        }
        const newArr = [];
        const arr = this;
        for (let i = 0; i < arr.length; i++) {
            const result = callback(arr[i], i, self);
            if (result) {
            newArr.push(arr[i]);
            }
        }
        return newArr;
    };
    ```

- find
    ```js
   Array.prototype.myFind = function (callback) {
        if (!callback) {
            throw Error("myFind: no callback provided");
        }
        let arr = this;
        for (let i = 0; i < arr.length; i++) {
            const result = callback(arr[i], i, arr);
            if (result) {
                return arr[i];
            }
        }
        return undefined;
  };
    ```

- some
    ```js
    Array.prototype.mySome = function (callback) {
        if (!callback) {
            throw Error("mySome: no callback provided");
        }
        let arr = this;
        for (let i = 0; i < arr.length; i++) {
            const result = callback(arr[i], i, arr);
            if (result) {
                return true;
            }
        }
        return false;
    };
    ```

- reduce
    ```js
    Array.prototype.myReduce = function (callback, initialValue = 0) {
        if (!callback) {
            throw Error("myReduce: no callback provided");
        }

        let arr = this;
        for (let i = 0; i < arr.length; i++) {
            const currValue = callback(initialValue, arr[i], i, arr);
            initialValue = currValue;
        }
        return initialValue;
    };
    ```



    
**Complex Polyfills**

- call
    ```js
    const userData = {
        name: "John",
        city: "New York",
    };

    function printData(age, bloodGroup) {
        console.log(`${this.name} is ${age} years old and has blood group ${bloodGroup} and lives in ${this.city}`);
    }

    printData.call(userData, 20, "A+");

    Function.prototype.myCall = function (context, ...args) {
        if (typeof this !== "function") {
            throw Error(`${this} is not callable`);
        }

        // it will store the reference of the function that is being called
        context.referenceFn = this;
        context.referenceFn(...args);
        delete context.referenceFn;
    };
    printData.myCall(userData, 20, "A+");
    ```

- apply
    ```js
    const userData = {
        name: "John",
        city: "New York",
    };
    function printData(age, bloodGroup) {
        console.log(`${this.name} is ${age} years old and has blood group ${bloodGroup} and lives in ${this.city}`);
    }

    Function.prototype.myApply = function (context, args) {
        if (typeof this !== "function") {
            throw Error(`${this} is not callable`);
        }
        if (!Array.isArray(args)) {
            throw Error("myApply: args must be an array");
        }
        context.referenceFn = this;
        context.referenceFn(...args);
        delete context.referenceFn;
    };
    printData.myApply(userData, [20, "A+"]);
    ```


- bind
    ```js
        const userData = {
            name: "John",
            city: "New York",
        };
        function printData(age, bloodGroup) {
            console.log(`${this.name} is ${age} years old and has blood group ${bloodGroup} and lives in ${this.city}`);
        }


        Function.prototype.myBind = function (context, ...args) {
            if (typeof this !== "function") {
                throw Error(`${this} is not callable`);
            }
            const referenceFn = this;
            return function (...otherParams) {
                context.referenceFn = referenceFn;
                context.referenceFn(...args, ...otherParams);
                delete context.referenceFn;
            };
        };
        const b1 = printData.myBind(userData, 20);
        b1("A+");
        b1(20, "A+");
    ```

 

