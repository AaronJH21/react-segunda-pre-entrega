const productos=[
    {id:'1',categoria:'Survival',name:"Dying light 2",foto: 'https://i.imgur.com/BGch5YM.png' ,price:23,},
    {id:'2',categoria:'Mundo abierto',name:"Elden Ring",foto: 'https://i.imgur.com/TbZh4hJ.jpeg',price:23,},
    {id:'3',categoria:'Acción y aventura',name:"God of War: Ragnarök",foto: 'https://i.imgur.com/xFRv9Bj.jpeg',price:23,},
    {id:'4',categoria:'Survival',name:"The Forest 2",foto: 'https://i.imgur.com/dtapTN7.jpeg',price:23,}
]

 export const getFetch = new Promise((resolve,reject)=>{
     let condition=true
     if (condition){
         setTimeout(()=>{
            resolve(productos)

         },300)      
     }else{
         reject('400 not found')

     }

 })
