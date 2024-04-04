export const DialogStyle = {
    position: 'absolute',
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: '8px',
    p: 4,
    outline: '0px solid transparent',
};

export const DrawerStyle = (drawerWidth) => {
    return({
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', top: '140px' }
    })
}