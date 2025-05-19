import React, {useState} from 'react';
import {Box, Button, CircularProgress} from "@mui/material";
import useCountries from "../../../hooks/useCountries.js";
import AddCountryDialog from "../../components/countries/addCountryDialog/AddCountryDialog.jsx";
import CountriesGrid from "../../components/countries/countryGrid/CountriesGrid.jsx";

const CountriesPage = () => {
    const {countries, loading, onAdd, onEdit, onDelete} = useCountries();
    const [addCountryDialogOpen, setAddCountryDialogOpen] = useState(false);

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
                        <Box sx={{display: "flex", justifyContent: "flex-end", mb: 2}}>
                            <Button variant="contained" color="primary"
                                    onClick={() => setAddCountryDialogOpen(true)}>
                                Add Country
                            </Button>
                        </Box>
                        <CountriesGrid countries={countries} onEdit={onEdit} onDelete={onDelete}/>
                    </>}
            </Box>
            <AddCountryDialog
                open={addCountryDialogOpen}
                onClose={() => setAddCountryDialogOpen(false)}
                onAdd={onAdd}
            />
        </>
    );
};

export default CountriesPage;