import { useEffect, useLayoutEffect } from "react";
import DebouseFn from "../Debounse/debouceEx";
import { Provider } from "react-redux";
import Counter from "../Redux/Counter";
import { store } from "../Redux/store";

const Home = () => {
useEffect(() => {    
 console.log('mounted Home');
    return () => {
        console.log('unmounted Home fdsgsgs');
    };
   }, []); 

   useEffect(()=>{
    console.log('rendered');
   },[])
   useLayoutEffect(() => {
    console.log('layout effect Home');  
   }, []);  


    return (<div>This is Home Component  <DebouseFn/>
    <Provider store={store}>
    <Counter />
  </Provider>
    </div>)

}
export default Home;    