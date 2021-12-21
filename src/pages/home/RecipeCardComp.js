import React from 'react';
import { useNavigate } from 'react-router-dom';
import defaultImage from '../../assets/default-image.jpg';
import { Button, RecipeCard, RecipeHeader, RecipeImage } from './HomeStyle';

const RecipeCardComp = ({ recipe }) => {
  //! daha fazla detay istediğimizde more tuşuna bastığımızda details sayfasına navigate oluyor.

  // console.log({ recipe });
  let navigate = useNavigate();
  const moreClick = () => {
    navigate('/details', { state: { recipe } });
    //! yukarıdaki router yapısında onClick butonu ile {recipe}'i state olarak gönderiyoruz.
  };

  return (
    <RecipeCard>
      <RecipeHeader>{recipe.label}</RecipeHeader>
      <RecipeImage src={recipe?.image || defaultImage} />
      <Button onClick={moreClick}>View More</Button>
    </RecipeCard>
  );
};

export default RecipeCardComp;
