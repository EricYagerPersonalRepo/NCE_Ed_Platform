// HomeStyle.ts
import { Theme } from "@mui/material/styles"

export const getFullHeightStyle = (theme: Theme): React.CSSProperties => ({
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: '5vh',
})

export const getHalfWidthStyle = (theme: Theme): React.CSSProperties => ({
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(4),
})
