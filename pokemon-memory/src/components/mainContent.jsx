import {useState,useEffect} from "react";
import Header from "./Header";
function Content(){
    const [score, setScore]=useState(0);
    const [pokemon, setPokemon] = useState([]);
    const [clickedPokemon, setClickedPokemon]=useState([]);


    function generateUniqueRandomNumbers(count, min, max) {
        let id = new Set();
      
        while (id.size < count) {
          let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
          id.add(randomNumber);
        }
      
        return Array.from(id);
      }
      
      // Example usage:
      const id = generateUniqueRandomNumbers(12, 1, 50);
      // Output an array of 5 unique random numbers between 1 and 10
      
      async function getImg() {
        let pokeData=[];
        for(let i=0;i<12;i++){
          try {
            let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id[i]}/`);
            let data = await res.json();
            pokeData.push({
              nameOfPokemon:data.name,
              imageOfPokemon:data.sprites.other.dream_world.front_default
  
            })
          } catch (err) {
            console.log(err);
          }
        }
        setPokemon(pokeData)
        
      }
    
    useEffect(() => {
      
      getImg();
    }, []);

    
    function checkClick(name){
     if(clickedPokemon.includes(name)){
        setScore(0);
         setClickedPokemon([])
         getImg();
     }else{
        setClickedPokemon([...clickedPokemon,name])
        setScore(score+ 1);
        getImg();
     }
    }
   
    return (
      <>
      <Header score= {score}/>
        {pokemon && <div className="pokemons">
            {
            pokemon.map((p,index)=>(
              <div key={index} className="card" onClick={()=>{
                checkClick(p.nameOfPokemon);
              }}>
               <div className="img-background"><img src={p.imageOfPokemon} alt="" className="image" /></div>
               
               <div className="name-background">
               <p>{p.nameOfPokemon}</p>
               </div>
               
              </div>
            ))
  
          }
          
        </div>}
        
      </>
    );
}

export default Content;