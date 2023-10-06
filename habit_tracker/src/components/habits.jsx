import React, { Component } from "react";
import Habit from "./habit";

class Habits extends Component {
    state = {
        habits: [
            { id: 1, name: "reading", count: 0 },
            { id: 2, name: "running", count: 0 },
            { id: 3, name: "coding", count: 0 },
        ],
    };
    handleIncrement = (habit) => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count++;
        this.setState({ habits });
        // this.setState(this.state.habit.count + 1);
    };
    handleDecrement = (habit) => {
        const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        const count = habits[index].count - 1;
        habits[index].count = count < 0 ? 0 : count;
        // count > 0 ? 0 : console.log("aaa");
        this.setState({ habits });
    };
    handleDelete = (habit) => {
        const habits = this.state.habits.filter((item) => item.id !== habit.id);
        // const habits = [...this.state.habits];
        // const index = habits.indexOf(habit);
        // habits.splice(index, 1);
        this.setState({ habits });
    };
    render() {
        return (
            <ul>
                {this.state.habits.map((item) => (
                    <Habit
                        key={item.id}
                        habit={item}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                    ></Habit>
                ))}
            </ul>
        );
    }
}

export default Habits;
