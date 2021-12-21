import axios from 'axios';
import React, { useState } from 'react';
import homeSvg from '../../assets/home.svg';
import Header from '../../components/header/Header';
import { HomeImg, ImgDiv, MainContainer } from './HomeStyle';
import RecipeCardComp from './RecipeCardComp';

const mealTypes = ['breakfast', 'Lunch', 'Dinner', 'Snack', 'Teatime'];
//! EDAMAM
const APP_ID = '8b267edf';
const APP_KEY = 'cf3f5bc9c2126b5f44955a62c3e7bebc';

const Home = () => {
  const [query, setQuery] = useState('pizza');
  const [recipes, setRecipes] = useState();
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase()); //* default olarak 0'ncı indexi getirsin

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    if (query !== '') {
      const result = await axios(url);
      // console.log(result.data.hits);
      if (result.data.more) {
        console.log('this food not found');
      }
      setRecipes(result.data.hits);
      setQuery('');
    } else {
      console.log('Please fill the form');
    }
  };

  // useEffect(() => {
  //   getData();
  // });

  return (
    <div>
      <Header setQuery={setQuery} query={query} getData={getData} mealTypes={mealTypes} setMeal={setMeal} meal={meal} />

      {recipes ? (
        <MainContainer>
          {recipes.map((recipe, index) => (
            <RecipeCardComp key={index} recipe={recipe.recipe} />
          ))}
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
    </div>
  );
};

export default Home;
