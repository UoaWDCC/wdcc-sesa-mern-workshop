import React from "react";
import { Button as MuiButton } from "@material-ui/core";

export default function Button() {
    return (
        <MuiButton variant={"contained"} color={"primary"}>
            Hello World!
        </MuiButton>
    );
}