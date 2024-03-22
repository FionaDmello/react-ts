import { type FC } from "react";
import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";

type CourseGoalListProps = {
  goals: CGoal[];
  deleteGoalHandler: (id: number) => void;
};

const CourseGoalList: FC<CourseGoalListProps> = ({
  goals,
  deleteGoalHandler,
}) => {
  return (
    <>
      <ul>
        {goals.map((goal) => {
          return (
            <li key={goal.id}>
              <CourseGoal
                id={goal.id}
                title={goal.title}
                deleteGoalHandler={deleteGoalHandler}
              >
                {goal.description}
              </CourseGoal>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CourseGoalList;
