import { type FC } from "react";
import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";

type CourseGoalListProps = {
  goals: CGoal[];
};

const CourseGoalList: FC<CourseGoalListProps> = ({ goals }) => {
  return (
    <>
      <ul>
        {goals.map((goal) => {
          return (
            <li key={goal.id}>
              <CourseGoal title={goal.title}>{goal.description}</CourseGoal>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CourseGoalList;
