import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';

function App() {
  return (
    <div className="Parentbox">
      <FotoProduk/>
      <ProdukInfo name="Kagura For Life" category="LEBARAN" isDiscount="no"/>
    </div>
  );
}

function FotoProduk() {
  return(
    <div className="Foto">
      <img src="shoes.jpg"/>
    </div>
  );
}

function CheckDiscount(props){
  let {isDiscount} = props;
  let text = '';

  if (isDiscount == "yes") {
    text = "Diskon 50% off"
  } 
  else if(isDiscount == "coming"){
    text = "Akan ada diskon"
  }
  else {
    text = "Tidak ada diskon"
  }

  return (<p>{text}</p>);
}

function ProdukInfo(props) {
  const {category, name, isDiscount} = props;

  return (
    <div className="Deskripsi">
      <p className="Cate">{category}</p>

      <h1 className="Title">{name}</h1>

      <p className="Price">IDR 123.456.789</p>

      <CheckDiscount isDiscount={isDiscount}/>

      <p className="Info">
        One of the most recognizable shose ib the AJ collection, the Air Jordan 2 Retro eatures 
        lightweigh, visinle cisjopmomh jusr like the orihinal from '88. Signature detauks abd 
        arerials celebrate the game-changing icon
      </p>

      <a onClick={(e) => TambahCart(name)}>Add to Cart</a>
    </div>
  );
}

function TambahCart(name){
  return console.log("Membeli "+name)
}

export default App;
