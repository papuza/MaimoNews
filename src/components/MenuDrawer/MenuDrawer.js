import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';

export default function TemporaryDrawer() {

    const categorias = [
        {label: "Politica", url: "politica"}, 
        {label: "Internacionales", url: "internacionales"}, 
        {label: "Tecnologia", url: "tecnologia"}, 
        {label: "Espectaculos", url: "espectaculos"}, 
        {label: "Deportes", url: "deportes"}, 
        {label: "Diseño", url: "diseno"}, 
        {label: "Gaming", url: "gaming"}
    ]
    
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {categorias.map(({label, url})=>
                <Link href={`/category/${url}`}>
                    <ListItem button>
                        <ListItemIcon>
                           <MailIcon />
                        </ListItemIcon>
                        <ListItemText primary={label}/>
                    </ListItem>
                </Link>
                )}
            </List>
        </Box>
    );

    return (
        <div>
            <MenuIcon onClick={toggleDrawer('left', true)} />
            <Drawer
                anchor='left'
                open={state['left']}
                onClose={toggleDrawer('left', false)}
            >
                {list('left')}
            </Drawer>
        </div>
    );
}