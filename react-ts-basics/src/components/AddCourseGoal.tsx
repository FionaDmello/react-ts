type AddCourseGoalProps = {
  onAddGoal: () => void;
};

const AddCourseGoal = ({ onAddGoal }: AddCourseGoalProps) => {
  return (
    <>
      <form onSubmit={onAddGoal}>
        <div>
          <label htmlFor="courseTitle">Title</label>
          <input id="courseTitle" type="text" />
        </div>
        <div>
          <label htmlFor="courseDescription">Description</label>
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
