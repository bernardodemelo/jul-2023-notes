// Arrays Inside Arrays

// Matrix Example of Yesterday's Lab

const matrix = [
    [ 8,  2, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, "lol"],
    [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00],
    [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65],
    [52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91],
    [22, 31, 16, false, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80]
  ];

  // Console.log 8
  console.log(matrix[0][0])

  // Console.log 97
  console.log(matrix[0][3]);

  // Console.log false
  console.log(matrix[4][3]);

  // Console.log lol
  // [2,3,4] --> 3 elements. 4 is index 2
  console.log(matrix[0][matrix[0].length-1])

  // Arrays with Objects
  const students = [
    {name: 'Sally Brady', age:18}, 
    {name: 'Steve Fisher', age:12}, 
    {name:'Eva Wade', age:5}, 
    {name:'Ronnie Foster', age:8}, 
    {name:'Fred Perkins', age:54}, 
    {name:'Russell Wright', age:79}
  ]

  // console.log Ronnie Foster
  console.log(students[3].name);

  // console.log 18
  console.log(students[0].age);

  // Objects inside Objects 
  let classRoom = {
    teacher: {
        firstName: 'Diogo', 
        lastName: 'Capitão', 
        subject: 'Program Manager', 
        info: {
            glasses: true, 
            ironhack: true
        }
    },
    teacherAssistant: {
        firstName: 'Bruno', 
        lastName: 'Rocha', 
        role: {
            name: 'TA', 
            fullTime: true
        }
    }
  }

  // console.log Diogo's last name
  console.log(classRoom.teacher.lastName);

// Objects with Arrays
const fakeSchool = {
    name: "Fake School 3",
    classRooms: [
      {
        teacher: { firstName: 'Nikko', lastName: 'Crist', age: 42 },
        students: [
          { firstName: 'Christop', lastName: 'Hahn', age: 26 },
          { firstName: 'Newell', lastName: 'Kemmer', age: 27 },
          { firstName: 'Katheryn', lastName: 'Heller', age: 26 },
          { firstName: 'Saul', lastName: 'Heathcote', age: 20 },
          { firstName: 'Maudie', lastName: 'Haley', age: 30 }
        ]
      },
      {
        teacher: { firstName: 'Nathanael', lastName: 'Hansson', age: 50 },
        students: [
          { firstName: 'Jensen', lastName: 'Reichel', age: 21 },
          { firstName: 'Lois', lastName: 'Kulas', age: 28 },
          { firstName: 'Caterina', lastName: 'Wolff', age: 28 },
          { firstName: 'Dahlia', lastName: 'Collier', age: 24 },
          { firstName: 'Linwood', lastName: 'Langosh', age: 26 }
        ]
      }
    ]
}

// console.log Nikko
console.log(fakeSchool.classRooms[0].teacher.firstName)

//console.log Newell
console.log(fakeSchool.classRooms[0].students[1].firstName);

// Example with Space X
async function displayMissionPatches() {
    try {
      const response = await fetch("https://api.spacexdata.com/v4/launches");
      const jsonResponse = await response.json();
   
      console.log("Parsed response: ", jsonResponse);
    } catch (err) {
      console.log("Something went wrong!", error);
    }
  }
   
  displayMissionPatches();