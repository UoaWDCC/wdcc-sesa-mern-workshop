import styled from "styled-components";

const StyledDiv = styled.div`
    width: 25%;
    margin: auto;

    border: 2px solid black;
    border-radius: 5px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`

function TodoList({ todos, handleClick }) {
    return todos.map(function(todo, index){
        function onClick() {
            handleClick(index);
        }

        return (
            <div key={index} >
                <StyledDiv>
                    <input type="checkbox" value={todo.isComplete} onClick={onClick} />
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                </StyledDiv>
            </div>
        );
    });
}

export default TodoList;