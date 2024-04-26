import {createTheme} from "@mui/material/styles";
import {teal} from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: teal,
        secondary: {
            main: "#10776b",
        },
        background: {
            default: "#ffffff",
        },
        text: {
            primary: "#0C0C0C",
            secondary: "#10776b",
        },
    },

    components: {
        MuiInputLabel: {
            styleOverrides: {
                root: {fontSize: "20px", color: teal[900]},
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    width: "100%",
                    backgroundColor: "#f0f8ff",
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                root: {
                    width: "100%",
                    backgroundColor: "#f0f8ff",
                },
                icon: {
                    color: teal[500],
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    border: "2px solid #009879",
                    borderRadius: "5px",
                    padding: "10px",
                    marginBottom: "10px",
                    backgroundColor: "#f0f8ff",
                    boxShadow: "10px 7px 10px #20a78c",
                    transition: "box-shadow 0.3s",
                    "&:hover": {
                        boxShadow: "0px 0px 10px #20a78c",
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    width: "100%",

                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: teal[500],
                        borderWidth: "3px",
                        transition: "border-color 0.5s, box-shadow 0.5s",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: teal[700],
                        boxShadow: `0 0 10px ${teal[500]}`,
                        borderWidth: "3px",
                        transition: "border-color 0.5s, box-shadow 0.5s",
                    },
                },
                notchedOutline: {
                    borderColor: teal[300],
                    borderWidth: "2px",
                },
                input: {
                    color: teal[900],
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    padding: "10px",
                    "&:hover": {
                        backgroundColor: teal[200],
                    },
                    "&:selected": {
                        backgroundColor: teal[300],
                    },
                },
            },
        },
    },
});

export {theme};
