// The following is allowed because the initial type for the variable is any
let userName;

userName = 34;
userName = "Max";

// The best way to work with TS is
let userAge: number;

userAge = 45;

// or
let isValid = true;

// on running the compiler on this file, it converts the lets to var because the compiler makes sure the js code is backwards compatible

let userId: string | number;
let id: string | number = 123;

userId = 101;
userId = "Philip";

// the above allows for the user object to also be empty.
let user: {};

// if this is not a desired effect, its best to create more type safety by specifying the shape of the object as follow
let userObj: {
  name: string;
  id: string | number;
  age: number;
  profession: string;
  professionCode: number | string;
};

userObj = {
  id: 145,
  name: "Fifi",
  age: 35,
  profession: "Developer",
  professionCode: "IT324",
};

let userHobbies: Array<string> | string | null;

userHobbies = null;
userHobbies = "Coding";
userHobbies = ["Coding", "Cooking", "Cleaning"];

let userPostcodes: number[] = [235639, 25047];

// since a const variable has a specific value, its type will be the exact value that is set during its initiation
const KEY = "DERSE234023";

let consoleAdd = (a: number, b: number): void => console.log(a + b);

let add = (a: number, b: number): number => a + b;

let calculate = (
  a: number,
  b: number,
  calcFn: (d: number, e: number) => number // this reads: calcFn wants a function that has the described signature, not just any function
) => {
  calcFn(a, b);
};

calculate(2, 3, add);

// to avoid type definitions getting too long create type aliases
// type alias names are usually  Pascal cased
type SubtractFn = (d: number, e: number) => number; // the type alias

let subtract: SubtractFn = (a, b) => a - b; // the actual function definition

calculate(10, 5, subtract);

interface Credentials {
  password: string | number;
  email: string;
}

let creds: Credentials = {
  password: "abc@123",
  email: "a@a.a",
  mode: "admin",
};

// a special case where you could use interface beyond objects is the following
class AuthCredentials implements Credentials {
  // this above signature makes sure that your class adds the properties defined in the Credentials type as below
  email: string;
  password: string | number;
  userName: string;
  mode: string; // see below why this is required
}

// for example if you have the case implementing login, you can then go about doing it two ways as shown below
function login(credentials: Credentials) {
  console.log("Logging in!");
}

login(creds);
// or
login(new AuthCredentials());

// extending a interface
// but note: if an interface is extended the previously written class implementation also has to be updated accordingly!
interface Credentials {
  mode: string;
}

// Merging types declared with type keyword
type Admin = {
  permissions: string[];
};

type AppUser = {
  userName: string;
};

type AppAdmin = Admin & AppUser;

let newAdmin: AppAdmin = {
  permissions: ["login"],
  userName: "Max",
};

// Merging types declared with Interface
interface inAdmin {
  permissions: string[] | [];
}

interface inAppUser {
  userName: string;
}

// One tends to extend interfaces even while merging props
interface inAppAdmin extends inAdmin, inAppUser {
  // add properties that you want to extend the interface(s) with here
}

let inNewAdmin: inAppAdmin = {
  permissions: [],
  userName: "Nana",
};

// Example of type guarding and type narrowing
type Role = "admin" | "user" | "editor";

function performAction(action: string, role: Role) {
  if (role === "admin") {
    // do stuff specific to the admin role!
  }

  if (typeof action === "string") {
    // This works perfectly during run time because typeof is native to JS and not to TS
  }
}

// Working with Generic types
let roles = Array<Role>; // this is an example of a built-in generic type. The alternate form of Role[] is not.

// Building your own generic type
type DataStorage<T> = {
  // when I do not know the shape of the objects that the storage array carries, the type information carried by DataStorage itself becomes less specific
  //  and thus, dependent on the placeholder(<T> is the standard, can be anything) type of the storage property. Making DataStorage a Generic Type
  storage: Array<T>;
  add: (data: T) => void;
};

// The above type allows us to store data of different types! Its generic!
const textStorage: DataStorage<string> = {
  storage: [],
  add: (data) => {
    this.storage.push(data);
  },
};

const userStorage: DataStorage<AppUser> = {
  storage: [],
  add: (user) => {
    this.storage.push(user);
  },
};

// creating a generic function
function merge<T, U>(a: T, b: U) {
  return { ...a, ...b };
}

// The following won't work!
// let mergeAgain = (a: T, b: U): <T, U> => { ...a, ...b }

const newUser = merge<{ name: string }, { age: number }>(
  { name: "Max" },
  { age: 34 }
);

// While coding in real life, the following signature is often encountered where the expected types are infered from the values that are passed in during function call!
// let newUser = merge({ name: 'Max' }, { age: 34 });
// Here T and U are infered to be of type { name: string } and { age: number }
