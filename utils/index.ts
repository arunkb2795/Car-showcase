export async function fetchCars() {
    const headers = {
        "X-RapidAPI-Key": "8d9b71856dmsh6099f5945bcbcfbp17c74bjsn072827debdeb",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };
    try {
        const response = await fetch(
            "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
            {
                headers: headers,
            }
        );

        const result = await response.json();
        return result;
    } catch (error) {
        console.log(error);
    }
}
