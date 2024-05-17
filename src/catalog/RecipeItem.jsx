import {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {getOneRecipe} from '../api';

import Preloader from '../components/Preloader';

export default function RecipeItem(props) {
    const params = useParams();
    const navigate = useNavigate();

    const [recipe, setRecipe] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getOneRecipe(params.id).then(data => {
            data.meals[0].idMeal && setRecipe(data.meals[0]);
            setLoading(false);
        });
    }, [params.id]);

    return (
        <>
            {loading ? (
                <Preloader />
            ) : recipe.idMeal ? (
                <>
                    <h1>{recipe.strMeal}</h1>
                    <p>
                        <button className="btn" onClick={navigate.goBack}>Go Back</button>
                    </p>
                    <img src={recipe.strMealThumb} alt="" />
                    <p>Category: {recipe.strCategory}</p>
                    {recipe.strArea !== 'Unknown' && <p>Area: {recipe.strArea}</p>}
                    <p>{recipe.strInstructions}</p>
                </>
            ) : (
                <p>Не удалось загрузить рецепт</p>
            )}
        </>
    );
}
