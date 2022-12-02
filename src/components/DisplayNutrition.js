import React, { useEffect } from "react";

const [nutrition, setNutrition] = useState(
    {
    sugar_g: " ",
    fiber_g: " ",
    serving_size_g: " ",
    sodium_mg: " ",
    name: " ",
    potassium_mg: " ",
    fat_saturated_g: " ",
    fat_total_g: " ",
    calories: " ",
    cholesterol_mg: " ",
    protein_g: " ",
    carbohydrates_total_g: " ",
    },
);

const FetchData = () => {
    const fetchExternal = () => {
        const url = "https://calorieninjas.p.rapidapi.com/v1/nutrition?query=apple";
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "192cabc390mshcdf1222c8dc4cc8p134fd5jsnf2ea8bfb757f",
                "X-RapidAPI-Host": "calorieninjas.p.rapidapi.com",
            },
        };
        fetch(url,options)
            .then((response) => response.json())
            .then((incomingData) => {
                console.log(incomingData);
            });
        };
        useEffect(() => {
            fetchExternal();
        }, []);
        return (
            <>
                <h2>Nutrition data</h2>
            </>
        );
    };

export default FetchData; 