import { type FormEvent } from "react";

type AddCourseGoalProps = {
  onAddGoal: (event: FormEvent<HTMLFormElement>) => void;
};

// there are 3 ways in react through which you can access the user input
// 1. State and 2 way binding
// 2. using FormData object
// 3. using useRef
// check out the onAddGoal Handler in addition to the following to understand what exactly is required for this

const AddCourseGoal = ({ onAddGoal }: AddCourseGoalProps) => {
  return (
    <>
      <form onSubmit={(event: FormEvent<HTMLFormElement>) => onAddGoal(event)}>
        <div>
          <label htmlFor="courseTitle">Your Goal</label>
          <input id="courseTitle" type="text" />
        </div>
        <div>
          <label htmlFor="courseDescription">Short Summary</label>
          <input id="courseTitle" type="text" />
        </div>
        <div>
          <button>Add Goal</button>
        </div>
      </form>
    </>
  );
};

export default AddCourseGoal;
