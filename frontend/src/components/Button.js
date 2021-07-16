import React, { useState } from "react";
import { Button as MuiButton } from "@material-ui/core";

export default function Button() {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <MuiButton
            variant={isPressed ? "outlined" : "contained"}
            color={"primary"}
        >
            {isPressed ? "Unpress me!" : "Press me!"}
        </MuiButton>
    );
}