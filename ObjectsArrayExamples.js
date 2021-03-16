// 3 realistic objects with at least 10 key-value pairs, One of the 3 objects contain a key with another object value which in turn has 5 keyvalue pairs


const CLUB = { 
  firstName:"Manchester", 
  lastName:"United", 
  age:120, 
  country:"UK", 
  language:"English", 
  nickname:"theRedDevils", 
jerseyColor:"red",
 manager:"OleGunnarSolskjær",
  stadium:"oldTrafford",
   captain:"HarryMacguire" 
   }
console.log(CLUB) ;
console.log(CLUB.nickname) ;


const COUNTRY = { 
  name:"Nigeria",
   continent:"Africa",
    region:"WestAfrica",
     capital:"Abuja",
      population:"200Million",
       government:"Democracy",
        statescount:36,
         age: 61,
          race:"Black",
           flag:"GreenWhiteGreen"
           }
console.log(COUNTRY);
console.log(COUNTRY.population);


const COMPANY = { 
  name:"EuidemTechnologies",
   country:"Nigeria",
    location:"Lagos",
     registered:True,
      age:5,        
EmployeeCount: 50,
 product:"Diadem",
  program:"SkillUpAfrica",
   value:"QualityDelivery"
   industry: {
      "Technology", "Education" "Hospitality", "Entertainment", "Logistics"
        }
    } 
console.log(COMPANY);
console.log(COMPANY.product);



//3 realistic arrays with at least 3 other realistic arrays as elements

const COLOURS = [["red", "blue", "green"], ["yellow", "purple", "orange"], ["white", "black", "grey"]];

const SHAPES = [["circle", "square", "triangle"], ["rhombus", "cuboid", "pentagon"], ["hexagon", "cylinhder", "rectangle"]];

const FRUITS = [["orange", "apple", banana"], ["pawpaw", "cashew", "strawberry"], ["mango", "pineapple", "coconut"]]; 

// An array with two realistic objects as its elements


const soil = [
{
		color: "red",
		type: "clay",
		texture: "thick"
	}

	{
		color: "brown",
		type: "sand",
		texture: "light"
	}
]
