import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";
import AddCourseGoal from "./components/AddCourseGoal";
import goalsImg from "./assets/goals.jpg";
import { type FormEvent, useState } from "react";

export type CourseGoal = {
  id: number;
  title: string;
  description: string;
};

export default function App() {
  // if the intial value is of a simple type, TS might actually infer it easily
  // but more often than not, the type of the state is more complex (involving array or objects with particular props or a combination or so)
  // this is something that TS will likely not be able to infer from the initial value, appropriately
  // hence, one needs to set the type as shown below (because useState is a generic function, it takes a type prop)
  // this will also allow the appropriate type to be set on the variable going forward, else TS will keep throwing problems
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  const addGoalHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // this is a DOM method, receives the DOM element (in our case, the form element),
    // and gives us easy access to the form data through it
    // we need to use event.currentTarget to make sure we pass the appropriate form to the object
    // the type of the event object has to be updated (extended) to mention the type of the element we are expecting
    // the HTMLFormElement type is made available via the lib property in tsconfig!
    new FormData(event.currentTarget);

    /*
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "Learn React + TS",
        description: "Learn it in depth!",
      };
      return [...prevGoals, newGoal];
    });
    */
  };

  const deleteGoalHandler: (id: number) => void = (id) => {
    setGoals((prevGoals) => {
      const newGoals = prevGoals.filter((goal) => goal.id !== id);
      return newGoals;
    });
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <AddCourseGoal onAddGoal={addGoalHandler} />
      <CourseGoalList goals={goals} deleteGoalHandler={deleteGoalHandler} />
    </main>
  );
}

//NOTE: when looping through a list of items to display on the screen, the semantically right way to do it is to use the ul, li elements.
// orr, when needed the ol,li elements
