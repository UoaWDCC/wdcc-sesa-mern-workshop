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
    return todos.map(function(todo, index) {
        function onClick() {
            handleClick(index);
        }

        return (
            <StyledDiv>
                <input type="checkbox" value={todo.isComplete} onClick={onClick}/>
                <h2>{todo.title}</h2>
                <p>{todo.description}</p>
            </StyledDiv>
        )
    })
}

export default TodoList;