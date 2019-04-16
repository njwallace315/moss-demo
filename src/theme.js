import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            main: '#c5050c',
            contrastText: '#f7f7f7',
        },
        secondary: {
            main: '#9b0000',
            contrastText: '#dadfe1',
        },
        accent: {
            main: '#9b0000',
            contrastText: '#f7f7f7',
        },
        background: {
            main: '#f7f7f7',
            contrastText: '#494949',
            link: '#0479a8',
        },
        backgroundAccent: {
            main: '#dadfe1',
            contrastText: '#282728',
        },
        darkerBackgroundAccent: {
            main: '#646569',
            contrastText: '#f7f7f7',
        },
        darkestBackgroundAccentFooter: {
            main: '#282728',
            contrastText: '#dadfe1',
        },
        link: {
            main: '#0479a8',
            footer: '#f9f9f9',
        },
        text: {
            main: '#494949',
            footer: '#adadad',
        },
    },
    overrides: {
        MuiAppBar: {
            root: {
                zIndex: 0,
            },
        },
        MuiPaper: {
            root: {
                backgroundColor: '#f7f7f7',
            },
        },
        MuiFormControl: {
            root: {
                width: '100%',
            },
        },
        MuiFormGroup: {
            root: {
                width: '100%',
            },
        },
        MuiChip: {
            icon: {
                color: 'inherit',
            },
        },
        MuiTooltip: {
            tooltip: {
                fontSize: '10pt',
            },
        },
        MuiInputBase: {
            root: {
                backgroundColor: '#fff',
            },
        },
        MuiCard: {
            root: {
                opacity: .9
            }
        },
        MuiOutlinedInput: {
            input: {
                padding: 15
            }
        },
        // MuiListItemText: {
        //     primary: {
        //         fontSize: '2rem'
        //     }
        // }
    },
    props: {
        MuiTextField: {
            variant: 'outlined',
        },
    },
    breakpoints: {
        values: {
            lg: 1366,
            md: 1024,
            sm: 600,
            xl: 1920,
            ipad_h: 1024,
            ipad_v: 768,
            pro_h: 1366,
            pro_v: 1024,
            xs: 768
        }
    }
});
console.log('theme: ', theme)

export default theme;
