import React from "react";

declare module "react" {
    interface CSSProperties {
        "--color"?: string,
        "--uv"?: string,
        "--bg"?: string,
        "--currSunBeamPosition"?: string,
        "--currSunPosition"?: string
    }
}