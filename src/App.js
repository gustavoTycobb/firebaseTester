import React, {useEffect, useState} from  'react'
import {db} from "./firebase"
import {set,ref,onValue,update} from "firebase/database"



function App() {
  const [number, setNumber] = useState(onValue(ref(db, 'users/jezz/'), (snapshot) => {
    const data = snapshot.val();
    return data.number
  }))
  



  useEffect(()=>{
    onValue(ref(db, 'users/jezz/'), (snapshot) => {
      const data = snapshot.val();
      console.log(data.number)
      setNumber(data.number)
    });
  },[])

  useEffect(()=>{
    setTimeout(() => {
      update(ref(db, 'users/jezz/'),{
        number:number+1
      })
      onValue(ref(db, 'users/jezz/'), (snapshot) => {
        const data = snapshot.val();
        console.log(data.number)
        setNumber(data.number)
      })}, 1000);
  },[number])


  return (
    <div className="App">
      <header className="App-header">
        {number}
      </header>
    </div>
  );
}

export default App;
