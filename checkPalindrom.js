let tes='Kasur ini rusak'
//let tes='minim'
////let tes='nama saya yudha'
if(checkPalindrom(tes.replace(/ /g,"").toLowerCase())){
  console.log("String ",tes," adalah palindrom")  
}else{
  console.log("String ",tes," bukan palingrom")
}


function checkPalindrom(tes){
  let tesSplit=tes.split("")
  for (let i=0; i<tesSplit.length/2;i++){
    //console.log("Tes tesSplit [i] ",tesSplit[i]," tesSplit[tesSplit.length-(i+1)] ",tesSplit[tesSplit.length-(i+1)])
    if(tesSplit[i]!=tesSplit[tesSplit.length-(i+1)]){
      console.log("Tes the string is not a palindrom")
      return false
    }
  }
  return true
}
