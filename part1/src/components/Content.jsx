import Part from "./Part";

const Content = (props) => {
    return (
        <div>
            <Part part={props.part1} exercises={props.exercise1} />
            <Part part={props.part2} exercises={props.exercise2} />
            <Part part={props.part3} exercises={props.exercise3} />
        </div>
    )
}

export default Content; 
