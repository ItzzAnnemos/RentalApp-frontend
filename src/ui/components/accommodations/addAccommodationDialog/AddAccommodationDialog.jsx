import React, {useState} from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel, MenuItem, Select,
    TextField
} from "@mui/material";
import useHosts from "../../../../hooks/useHosts.js";

const initialFormData = {
    "name": "",
    "category": "",
    "host": "",
    "numRooms": "",
};


const AddAccommodationDialog = ({open, onClose, onAdd}) => {
    const [formData, setFormData] = useState(initialFormData);
    const {hosts} = useHosts();

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    }

    const handleSubmit = () => {
        onAdd(formData);
        setFormData(initialFormData);
        onClose();
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add Accommodation</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                />
                <FormControl fullWidth margin="dense">
                    <InputLabel>Category</InputLabel>
                    <Select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        label="Category"
                        variant="outlined">
                        <MenuItem key={1} value={"ROOM"}>ROOM</MenuItem>
                        <MenuItem key={2} value={"HOUSE"}>HOUSE</MenuItem>
                        <MenuItem key={3} value={"FLAT"}>FLAT</MenuItem>
                        <MenuItem key={4} value={"APARTMENT"}>APARTMENT</MenuItem>
                        <MenuItem key={5} value={"HOTEL"}>HOTEL</MenuItem>
                        <MenuItem key={6} value={"MOTEL"}>MOTEL</MenuItem>
                    </Select>
                </FormControl>
                <FormControl fullWidth margin="dense">
                    <InputLabel>Manufacturer</InputLabel>
                    <Select
                        name="host"
                        value={formData.host}
                        onChange={handleChange}
                        label="Host"
                        variant="outlined">
                        {hosts.map((host) => (
                            <MenuItem key={host.id} value={host.id}>{host.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSubmit} variant="contained" color="primary">Add</Button>
            </DialogActions>
        </Dialog>
    )
};

export default AddAccommodationDialog;