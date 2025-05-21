import React from "react";
import {ToggleButton, ToggleButtonGroup} from "@mui/material";

const CategoryFilter = ({categories, selectedCategory, setSelectedCategory}) => {
    const handleCategoryChange = (event, newCategory) => {
        setSelectedCategory(newCategory);
    };

    return (
        <ToggleButtonGroup
            value={selectedCategory}
            exclusive
            onChange={handleCategoryChange}
            aria-label="Category Filter"
            color="primary"
            size="small"
        >
            <ToggleButton value={null}>All</ToggleButton>
            {categories.map((category) => (
                <ToggleButton key={category} value={category}>
                    {category}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    );
};

export default CategoryFilter;
