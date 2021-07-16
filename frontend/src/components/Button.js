import React from "react";
import { Button as MuiButton } from "@material-ui/core";

export default function Button({ isPressed, onClick }) {
    return (
        <MuiButton
            variant={isPressed ? "outlined" : "contained"}
            color={"primary"}
            onClick={onClick}
        >
            {isPressed ? "Unpress me!" : "Press me!"}
        </MuiButton>
    );
}