import React, {useState, useMemo} from 'react';
import {Box, Button, CircularProgress, ToggleButton, ToggleButtonGroup} from "@mui/material";
import useAccommodations from "../../../hooks/useAccommodations.js";
import AccommodationsGrid from "../../components/accommodations/accommodationsGrid/AccommodationsGrid.jsx";
import AddAccommodationDialog from "../../components/accommodations/addAccommodationDialog/AddAccommodationDialog.jsx";
import CategoryFilter from "../../components/accommodations/accommodationsFilter/AccommodationsFilter.jsx";

const AccommodationsPage = () => {
    const {accommodations, loading, onAdd, onEdit, onDelete} = useAccommodations();
    const [addAccommodationDialogOpen, setAddAccommodationDialogOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = useMemo(() => {
        const allCategories = accommodations.map(acc => acc.category);
        return [...new Set(allCategories)];
    }, [accommodations]);

    const filteredAccommodations = useMemo(() => {
        if (!selectedCategory) return accommodations;
        return accommodations.filter(a => a.category === selectedCategory);
    }, [accommodations, selectedCategory]);

    return (
        <>
            <Box className="products-box">
                {loading && (
                    <Box className="progress-box" sx={{display: "flex", flex: "1", justifyContent: "center", alignItems: "center"}}>
                        <CircularProgress/>
                    </Box>
                )}
                {!loading &&
                    <>
                        <Box sx={{display: "flex", justifyContent: "space-between", mb: 2}}>
                            <CategoryFilter
                                categories={categories}
                                selectedCategory={selectedCategory}
                                setSelectedCategory={setSelectedCategory}
                            />

                            <Button variant="contained" color="primary"
                                    onClick={() => setAddAccommodationDialogOpen(true)}>
                                Add Accommodation
                            </Button>
                        </Box>
                        <AccommodationsGrid accommodations={filteredAccommodations} onEdit={onEdit} onDelete={onDelete}/>
                    </>}
            </Box>
            <AddAccommodationDialog
                open={addAccommodationDialogOpen}
                onClose={() => setAddAccommodationDialogOpen(false)}
                onAdd={onAdd}
            />
        </>
    );
};

export default AccommodationsPage;