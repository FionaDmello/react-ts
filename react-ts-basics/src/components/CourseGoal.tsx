// ReactNode is a type, so it should be decorated to make it clear to the build tool that its an import that can be removed from the code that runs in the browser because the browser won't be able to deal with types anyways
//import { tpye FC, type PropsWithChildren } from "react";
import { type ReactNode } from "react";

// good idea to have a type alias (type or interface) on top to make the prop more easier to read and navigate
type CourseGoalProps = {
  title: string;
  children: ReactNode;
  deleteGoalHandler: () => void;
};
// NOTE: every react prop object has a special "children" property - when we need to  wrap our component around other some jsx code & use that wrapped code inside of the component
// every react component, in theory, receives the children prop. But on using custom type definitions we can make it inaccessible
// this is important if we need the children prop in our current component
// the special type comes from the automatically added dev dependencies of @types/react and @types/react-dom

// an alternate to the code above is to use another special type as shown below
// since it only provides a short cut to the children props declaration, its a generic type
// this needs to work with the type of the other props you expect

// TODO: uncomment the code below and hover over CourseGoalPropsAlt to see how the type is actually created!
//type CourseGoalPropsAlt = PropsWithChildren<{ title: string }>;

//NOTE: the signature is -  actual variable: variable type!
const CourseGoal = ({
  title,
  children,
  deleteGoalHandler,
}: CourseGoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
      <button onClick={deleteGoalHandler}>Delete</button>
    </article>
  );
};

// another valid rfc signature with arrow functions is shown below
{
  /*
  const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
  return (  );
}
 
export default CourseGoal;
*/
}

//NOTE: the key prop is also made available to all React components, but this does not need to be explicitly set in order to be used, unlike the children prop

export default CourseGoal;
