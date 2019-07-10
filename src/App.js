import React from 'react';
import './App.css';
import Box1 from './components/Box1'
import Box2 from './components/Box2'
import Box3 from './components/Box3'
import Box4 from './components/Box4'
 
function App() {
  return (
    <div className="App">
              <Box1
                title="Title"
                subtitle="Subtitle"
                firstparag="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quidem ea vero qui quibusdam temporibus quis voluptates aperiam minus sapiente eaque odit laboriosam quos dolorum, ullam optio ad repellendus incidunt ipsa alias reprehenderit nemo pariatur, libero nihil? Necessitatibus iusto magnam corporis doloribus, atque odio fuga a cupiditate accusamus, vero hic."
                secondparag="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quidem ea vero qui quibusdam temporibus quis voluptates aperiam minus sapiente eaque odit laboriosam quos dolorum, ullam optio ad repellendus incidunt ipsa alias reprehenderit nemo pariatur, libero nihil? Necessitatibus iusto magnam corporis doloribus, atque odio fuga a cupiditate accusamus, vero hic."              
                button="Zobacz Wiecej"/>
              <Box2 
              parag="Przeszły dżdże wiosny, zbiegło skwarne lato. I przykre miastu jesienne potopy, Już bruk ziębiącą obleczony szatą, Od stalnej Fryzów nie krzesany stopy. Więzieni słotą w domowej katuszy,Dziś na swobodne gdy wyjrzem powietrze"/>
              <Box3 
              parag="Przeszły dżdże wiosny, zbiegło skwarne lato. I przykre miastu jesienne potopy, Już bruk ziębiącą obleczony szatą, Od stalnej Fryzów nie krzesany stopy." />
              <Box4 
                title="Title"
                subtitle="Subtitle"
                firstparag="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quidem ea vero qui quibusdam temporibus quis voluptates aperiam minus sapiente eaque odit laboriosam quos dolorum, ullam optio ad repellendus incidunt ipsa alias reprehenderit nemo pariatur, libero nihil? Necessitatibus iusto magnam corporis doloribus, atque odio fuga a cupiditate accusamus, vero hic."
                secondparag="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quidem ea vero qui quibusdam temporibus quis voluptates aperiam minus sapiente eaque odit laboriosam quos dolorum, ullam optio ad repellendus incidunt ipsa alias reprehenderit nemo pariatur, libero nihil? Necessitatibus iusto magnam corporis doloribus, atque odio fuga a cupiditate accusamus, vero hic."              
                button="Zobacz Wiecej"/>
    </div>
  );
}

export default App;

//Before the grid