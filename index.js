const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let newTutorial = tutorials.map(
    function (string){
      let tutorialsString = string. split(' ')
      tutorialsString = tutorialsString.map(
        function (str){
          return str[0].toUpperCase() +str.slice(1)
        }
        )
        return tutorialsString.join(' ')
    }
  )
  return newTutorial
  // tutorials.split(' ');
  // newTutorial.split(' ').map((word) =>toUpperCase() +word.slice(1)).join(' S')
  // newTutorial.push(tutorials.split(" "))
  // tutorials.split(' ').map(function(string){
  //   return string.toUpperCase().join(' ')
  // }
  //   )
}
