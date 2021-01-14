window.onload = () => {
    let seeColor = document.querySelectorAll(".container>div");
    let arr = [];
    seeColor.forEach( color =>{
        color.onclick = () => {
          let firstValue = color.id; //Guardo el nombre de la id
          color.style.backgroundColor = firstValue; //Doy color al fondo.
          checkColor(firstValue, color);
        }
    })
    const checkColor = (firstValue, color ) =>{
      arr.push(firstValue);
      for(let i=0; i<arr.length; i++){  //Recorro el array y comparo.
        if(arr.length === 2){
          if(arr[0] === arr[1]){ //Iguales, vaciamos array.
            arr = [];
          }else{ //Distintos, vaciamos array y borramos color.
            arr = [];
            restablecerColores();
          }
        }
      }
    }
    const restablecerColores = () =>{
      seeColor.forEach( color =>{
        color.style.backgroundColor = 'grey';
    });
  }
}