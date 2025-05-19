import React, {useState} from 'react';
import {Box, Button, CircularProgress} from "@mui/material";
import useHosts from "../../../hooks/useHosts.js";
import HostsGrid from "../../components/hosts/hostsGrid/HostsGrid.jsx";
import AddHostDialog from "../../components/hosts/addHostDialog/AddHostDialog.jsx";

const HostsPage = () => {
    const {hosts, loading, onAdd, onEdit, onDelete} = useHosts();
    const [addHostDialogOpen, setAddHostDialogOpen] = useState(false);

    return (
        <>
            <Box className="products-box flex-1">
                {loading && (
                    <Box className="progress-box" sx={{display: "flex", flex: "1", justifyContent: "center", alignItems: "center"}}>
                        <CircularProgress/>
                    </Box>
                )}
                {!loading &&
                    <>
                        <Box sx={{display: "flex", justifyContent: "flex-end", mb: 2}}>
                            <Button variant="contained" color="primary"
                                    onClick={() => setAddHostDialogOpen(true)}>
                                Add Host
                            </Button>
                        </Box>
                        <HostsGrid hosts={hosts} onEdit={onEdit} onDelete={onDelete}/>
                    </>}
            </Box>
            <AddHostDialog
                open={addHostDialogOpen}
                onClose={() => setAddHostDialogOpen(false)}
                onAdd={onAdd}
            />
        </>
    );
};

export default HostsPage;