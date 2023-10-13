import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ItemListContainer from './components/itemListContainer/itemListContainer';
import ItemCount from './components/ItemCount/ItemCount.js';


function App() {
  //Se pasa esta función como prop al componente ItemCount
  // Esta función recibe por parámetro una cantidad e imprime un alert
  const onAdd = (qty) => {
    alert(`Agregaste ${qty} productos`);
  };
  return (
    <div className="App">
      <Header /> 
      <Main /> <ItemCount onAdd={onAdd} />
      < ItemListContainer/>
      
    </div>
  );
}

export default App;
