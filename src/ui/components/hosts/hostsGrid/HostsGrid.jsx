import React from 'react';
import {Grid} from "@mui/material";
import HostCard from "../hostCard/HostCard.jsx";

const HostsGrid = ({hosts, onEdit, onDelete}) => {
    return (
        <Grid container spacing={{xs: 2, md: 3}}>
            {hosts.map((host) => (
                <Grid item key={host.id} size={{xs: 12, sm: 6, md: 4, lg: 3}}>
                    <HostCard host={host} onEdit={onEdit} onDelete={onDelete}/>
                </Grid>
            ))}
        </Grid>
    );
};

export default HostsGrid;