import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";

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

  const addGoalHandler = () => {
    //when the new state depends on the old state use the following pattern to update state
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "Learn React + TS",
        description: "Learn it in depth!",
      };
      return [...prevGoals, newGoal];
    });
  };

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <div>
        <button onClick={addGoalHandler}>Add Goal</button>
      </div>
      <CourseGoalList goals={goals} />
    </main>
  );
}

//NOTE: when looping through a list of items to display on the screen, the semantically right way to do it is to use the ul, li elements.
// orr, when needed the ol,li elements
