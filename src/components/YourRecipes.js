import React, { useState } from 'react';

import EditIcon from './svg/pen_to_square_icon.svg';
import FileImageIcon from './svg/file_image_icon.svg';
import CloseIcon from './svg/close_icon.svg';

const YourRecipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [title, setTitle] = useState('');
    const [ingredient, setIngredient] = useState('');
    const [procedure, setProcedure] = useState('');
    const [image, setImage] = useState('');

    const handleClick = () => {
        if (title.trim() === '' || ingredient.trim() === '' || procedure.trim() === '' || image === null) {
            // Show an alert if one of the fields is empty
            alert('Please fill all fields and upload an image');
            return;
        }

        const newIngredient = ingredient.split(',').map(ing => ing.trim());
        const newProcedure = procedure.split(',').map(step => step.trim());

        const newRecipe = {
            id: recipes.length + 1,
            title: title,
            ingredient: newIngredient,
            procedure: newProcedure,
            image: URL.createObjectURL(image) // Create a URL for the uploaded image
        };

        setRecipes([...recipes, newRecipe]);

        // Clear input fields after adding the recipe
        setTitle('');
        setIngredient('');
        setProcedure('');
        setImage('');
    };

    const handleDelete = (id) => {
        setRecipes(recipes.filter(recipe => recipe.id !== id));
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    return (
        <div className="your_recipe_container">

            <div className="recipe_form">
                <input
                    type="text"
                    placeholder="Enter Title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />

                <input
                    type="text"
                    placeholder="Enter ingredients"
                    value={ingredient}
                    onChange={(event) => setIngredient(event.target.value)}
                />

                <input
                    type="text"
                    placeholder="Enter procedures"
                    value={procedure}
                    onChange={(event) => setProcedure(event.target.value)}
                />

                <input
                    type="file"
                    onChange={handleImageChange}
                />

                <button onClick={handleClick} className="add_btn">+</button>
            </div>

            <div className="recipe_card_container">
                {recipes.map(recipe => (
                    <div className="recipe">
                        <button onClick={() => handleDelete(recipe.id)} className="delete_btn">x</button>  
                        <div key={recipe.id} className="your_recipe_card">
                            <img src={recipe.image} alt="Recipe" className="recipe_image" />
                            <div className="recipe_details">
                                <div>
                                    <h3>{recipe.title}</h3>
                                    <h4>Ingredients:</h4>
                                    <ul>
                                        {recipe.ingredient.map((ing, index) => (
                                            <li key={index}>{ing}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div> 
                                    <h4>Procedure:</h4>
                                    <ul>
                                        {recipe.procedure.map((step, index) => (
                                            <li key={index}>{step}</li>
                                        ))}
                                    </ul>
                                </div>                      
                                </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default YourRecipes;
