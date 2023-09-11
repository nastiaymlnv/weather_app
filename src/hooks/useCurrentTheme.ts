import { useMemo } from "react";

import { useTheme } from "@mui/material/styles";

const WHITE = "#FFF";

export const useCurrentTheme = () => {
    const theme = useTheme();
    const currentTheme = theme.palette.background.default;
    const color = useMemo(() => currentTheme === WHITE ? "#080338" : WHITE, [currentTheme]);

    return color;
}