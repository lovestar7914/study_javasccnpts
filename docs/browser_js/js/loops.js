// string-string
// 숫자- Nunber
// ArrayList = Array[]]
// HashMAP = Object{}

//let animals = ["dog", "cat", "bird", "fish", "lizard"];

//console.log('Done');

//for(let i =0;i<animals.length; i=i+1){
   // console.log('${i}:${animals[i]}');
//}


//for(string animal : animals)
for (let animal of animals){
    console.log('${animal}');
}

const animals_obj = [
  { name: "dog", species: "canine" },
  { name: "cat", species: "feline" },
  { name: "bird", species: "avian" },
  { name: "fish", species: "aquatic" },
  { name: "lizard", species: "reptile" },
];

let outHyml = '';
for (let animal_HashMAP of animals_obj){
    console.log('name:${animal_hashmap.name}, species : ${animal_hashmap['species']}');
    outHyml = <div>name:${animal_hashmap.name}, species : ${animal_hashmAP['species']}</div>';
}
console.log(outHyml);

//brower자원 중에 docs
let loops_source = document.querySelector('#loops');

//loops

