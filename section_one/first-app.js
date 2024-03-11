var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _this = this;
// The following is allowed because the initial type for the variable is any
var userName;
userName = 34;
userName = "Max";
// The best way to work with TS is
var userAge;
userAge = 45;
// or
var isValid = true;
// on running the compiler on this file, it converts the lets to var because the compiler makes sure the js code is backwards compatible
var userId;
var id = 123;
userId = 101;
userId = "Philip";
// the above allows for the user object to also be empty.
var user;
// if this is not a desired effect, its best to create more type safety by specifying the shape of the object as follow
var userObj;
userObj = {
    id: 145,
    name: "Fifi",
    age: 35,
    profession: "Developer",
    professionCode: "IT324",
};
var userHobbies;
userHobbies = null;
userHobbies = "Coding";
userHobbies = ["Coding", "Cooking", "Cleaning"];
var userPostcodes = [235639, 25047];
// since a const variable has a specific value, its type will be the exact value that is set during its initiation
var KEY = "DERSE234023";
var consoleAdd = function (a, b) { return console.log(a + b); };
var add = function (a, b) { return a + b; };
var calculate = function (a, b, calcFn // this reads: calcFn wants a function that has the described signature, not just any function
) {
    calcFn(a, b);
};
calculate(2, 3, add);
var subtract = function (a, b) { return a - b; }; // the actual function definition
calculate(10, 5, subtract);
var creds = {
    password: "abc@123",
    email: "a@a.a",
    mode: "admin",
};
// a special case where you could use interface beyond objects is the following
var AuthCredentials = /** @class */ (function () {
    function AuthCredentials() {
    }
    return AuthCredentials;
}());
// for example if you have the case implementing login, you can then go about doing it two ways as shown below
function login(credentials) {
    console.log("Logging in!");
}
login(creds);
// or
login(new AuthCredentials());
var newAdmin = {
    permissions: ["login"],
    userName: "Max",
};
var inNewAdmin = {
    permissions: [],
    userName: "Nana",
};
function performAction(action, role) {
    if (role === "admin") {
        // do stuff specific to the admin role!
    }
    if (typeof action === "string") {
        // This works perfectly during run time because typeof is native to JS and not to TS
    }
}
// Working with Generic types
var roles = (Array); // this is an example of a built-in generic type. The alternate form of Role[] is not.
// The above type allows us to store data of different types! Its generic!
var textStorage = {
    storage: [],
    add: function (data) {
        _this.storage.push(data);
    },
};
var userStorage = {
    storage: [],
    add: function (user) {
        _this.storage.push(user);
    },
};
// creating a generic function
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
// The following won't work!
// let mergeAgain = (a: T, b: U): <T, U> => { ...a, ...b }
var newUser = merge({ name: "Max" }, { age: 34 });
// While coding in real life, the following signature is often encountered where the expected types are infered from the values that are passed in during function call!
// let newUser = merge({ name: 'Max' }, { age: 34 });
// Here T and U are infered to be of type { name: string } and { age: number }
