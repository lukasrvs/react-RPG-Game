import { useEffect } from 'react';
import * as Component from './App.styles';
import { Character } from './components/Character';
import { useCharacter } from './hooks/useCharacter';
const App = () =>{
  const char = useCharacter('Bonitão');
  const char2 = useCharacter('Zoado');
  useEffect(()=>{
    window.addEventListener('keydown', handleKeyDown);
  },[]);
  const handleKeyDown = (e: KeyboardEvent) => {
    switch(e.code) {
      case 'KeyA':
      case 'ArrowLeft': 
        char.moveLeft();
        break;
      case 'KeyW':
      case 'ArrowUp':
        char.moveUp();
        break;
      case 'KeyD':
      case 'ArrowRight':
        char.moveRight();
        break;
      case 'KeyS':
      case 'ArrowDown':
        char.moveDown();
        break;
    }
  }
  return (
    <Component.Container>
      <Component.Map>
        <Character x={char.x} y={char.y} side={char.side} name={char.name} />
        <Character x={char2.x} y={char2.y} side={char2.side} name={char2.name} />
      </Component.Map>
    </Component.Container>
  );
}
export default App;