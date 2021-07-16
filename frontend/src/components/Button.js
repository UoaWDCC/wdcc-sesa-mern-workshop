import React, { useState } from "react";
import { Button as MuiButton } from "@material-ui/core";

export default function Button() {
    const [isPressed, setIsPressed] = useState(false);
    function onClick() {
        setIsPressed(!isPressed);
    }

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