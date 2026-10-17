const KEY = 'champions';

const seedChampions = [
 {
   id: 1,
   name: 'Aatrox',
   role: 'top',
   price: ,
   image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/db39563458aa28c3f3aa8990f2c964a0f7645097-496x560.jpg?accountingTag=LoL&auto=format&fit=fill&q=80&w=457'
 },
 {
   id: 2,
   name: 'Ashe',
   role: 'bottom',
   price: ,
   image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/6311d8de67f55496be4886a353372c8da713dade-496x560.jpg?accountingTag=LoL&auto=format&fit=fill&q=80&w=457'
 },
 {
   id: 3,
   name: 'Locke',
   role: 'top',
   price: ,
   image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/d61c099e16a80b673db166428eba4e2fc27b59df-957x1080.jpg?accountingTag=LoL&auto=format&fit=fill&q=80&w=457'
 },
 {
   id: 4,
   name: 'Nami',
   role: 'support',
   price: ,
   image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/2988b76577008ad86a492a18ab5d206580abe21e-496x560.jpg?accountingTag=LoL&auto=format&fit=fill&q=80&w=457'
 },
 {
   id: 5,
   name: 'Alistar',
   role: 'support',
   price: ,
   image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/da8cefee5b85bca51360ccc1635ef5b0f6967767-496x560.jpg?accountingTag=LoL&auto=format&fit=fill&q=80&w=457'
 },
 {
   id: 6,
   name: 'Akshan',
   role: 'middle',
   price: ,
   image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/9e5ea58123ac5a699700eec49f8412af11e563a0-496x560.jpg?accountingTag=LoL&auto=format&fit=fill&q=80&w=457'
 },
 {
   id: 7,
   name: 'Hwei',
   role: 'middle',
   price: ,
   image: 'https://static.wikia.nocookie.net/leagueoflegends/images/0/01/Aspecto_centrado_-_Hwei_Base.jpg/revision/latest/smart/width/250/height/250?cb=20231121000316&path-prefix=es'
 },
 {
   id: 8,
   name: 'Aphelios',
   role: 'bottom',
   price: ,
   image: 'https://static.wikia.nocookie.net/leagueoflegends/images/3/34/Aspecto_centrado_-_Aphelios_Base.jpg/revision/latest/smart/width/250/height/250?cb=20231113043510&path-prefix=es'
 },
 {
   id: 9,
   name: 'Braum',
   role: 'support',
   price: ,
   image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/9e0a1f3e48f9b6c7356e5efe17b23383ace41f76-496x560.jpg?accountingTag=LoL&auto=format&fit=fill&q=80&w=457'
 },
 {
   id: 10,
   name: 'Vi',
   role: 'jungle',
   price: ,
   image: 'https://static.wikia.nocookie.net/leagueoflegends/images/1/12/Aspecto_centrado_-_Vi_Base.jpg/revision/latest/smart/width/250/height/250?cb=20231113042540&path-prefix=es'
 },
 {
   id: 11,
   name: 'Graves',
   role: 'jungle',
   price: ,
   image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/1a9925c47327dd6899c2a180335ca28abb52431e-285x323.jpg?accountingTag=WR'
 },
 {
   id: 12,
   name: 'Ekko',
   role: 'jungle',
   price: ,
   image: 'https://hips.hearstapps.com/hmg-prod/images/ekko-1636545004.jpg?crop=1.00xw:0.998xh;0,0.00153xh'
 },
 {
   id: 13,
   name: 'Nautilus',
   role: 'support',
   price: ,
   image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/624a37702a1e54b5f239a40157d42f32dd853b33-496x560.jpg?accountingTag=LoL&auto=format&fit=fill&q=80&w=457'
 },
 {
   id: 14,
   name: 'Gnar',
   role: 'top',
   price: ,
   image: 'https://static.wikia.nocookie.net/leagueoflegends/images/0/02/Cuadro_-_Gnar_Base.jpg/revision/latest?cb=20231113060808&path-prefix=es'
 },
 {
   id: 15,
   name: 'Akali',
   role: 'middle',
   price: ,
   image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/abbd173df157f943496abb0638add119f753e3b2-496x560.jpg?accountingTag=LoL&auto=format&fit=fill&q=80&w=457'
 },
 {
   id: 16,
   name: 'Milio',
   role: 'support',
   price: ,
   image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/28bcae8793c10de4c2e0fc85ff71b10d6d880d74-496x560.jpg?accountingTag=LoL&auto=format&fit=fill&q=80&w=457'
 },
 {
   id: 17,
   name: 'Azir',
   role: 'middle',
   price: ,
   image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/1636aeb5f8d604f7d3336428918146cac62c28e7-496x560.jpg?accountingTag=LoL&auto=format&fit=fill&q=80&w=457'
 },
 {
   id: 18,
   name: 'Volibear',
   role: 'top',
   price: ,
   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpBqm4rDF8_jf-pMZd5XNpNAWLlZIMdv7zkOrxn_GvOmH372y9SrLpCmE&s=10'
 },
 {
   id: 19,
   name: 'Annie',
   role: 'middle',
   price: ,
   image: 'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data_live/220684b035ca0a0dc0d93c17ee058872d7c2a4e9-496x560.jpg?accountingTag=LoL&auto=format&fit=fill&q=80&w=457'
 },
 {
   id: 20,
   name: 'Sett',
   role: 'top',
   price: ,
   image: 'https://static.wikia.nocookie.net/leagueoflegends/images/6/66/Cuadro_-_Sett_HEARTSTEEL.jpg/revision/latest?cb=20231026003051&path-prefix=es'
 }
];

function cargar() {
  const data = localStorage.getItem(KEY);
  if (data) return JSON.parse(data);
  localStorage.setItem(KEY, JSON.stringify(seedChampions));
  return seedChampions;
}

function guardar(lista) {
  localStorage.setItem(KEY, JSON.stringify(lista));
}

//CRUD

export function getChampions() {
  return cargar();
}

export function getChampionById(id) {
  return cargar().find((c) => c.id === parseInt(id));
}

export function createChampion(champion) {
  const lista = cargar();
  const nuevoId = lista.length > 0 ? Math.max(...lista.map((c) => c.id)) + 1 : 1;
  const nuevo = { ...champion, id: nuevoId };
  const actualizada = [...lista, nuevo];
  guardar(actualizada);
  return nuevo;
}

export function updateChampion(id, cambios) {
  const lista = cargar();
  const actualizada = lista.map((c) => (c.id === id ? { ...c, ...cambios } : c));
  guardar(actualizada);
  return actualizada.find((c) => c.id === id);
}

export function deleteChampion(id) {
  const lista = cargar();
  const actualizada = lista.filter((c) => c.id !== id);
  guardar(actualizada);
}
