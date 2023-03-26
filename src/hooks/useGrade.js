import { 
  SAT2023PT3RWM1, 
  SAT2023PT3RWM2a,
  SAT2023PT3RWM2b,

  SAT2023PT3RWM1BD, 
  SAT2023PT3RWM2ABD,
  SAT2023PT3RWM2BBD,

  SAT2023PT3MM1,
  SAT2023PT3MM2A,
  SAT2023PT3MM2B,

  SAT2023PT3MM1BD,
  SAT2023PT3MM2ABD,
  SAT2023PT3MM2BBD,
} from '../data.js' 

const useGrade = () => {

  //check current answers and creates object with incorrect question numbers and answers
  const gradeSAT2023PT3 = (currentAnswersReading, currentAnswersMath) => {
    const categories = []
    const difficulties = []

    const categoriesRWM1 = []
    const categoriesRWM2 = []

    const categoriesMM1 = []
    const categoriesMM2 = []
    
    let wrongNumbers = {}
    let wrongNumbersRWM1 = {}
    let wrongNumbersRWM2 = {}

    let wrongNumbersMM1 = {}
    let wrongNumbersMM2 = {}

    let rightNumbers = {}

    //grade the first module of reading
    Object.entries(currentAnswersReading).map(([key, value]) => {
      //add object pair into rightNumbers if correct, wrongNumbers if incorrect
      if(value == SAT2023PT3RWM1[key]){
        rightNumbers[key] = value
      } else {
        wrongNumbers[key] = value
        wrongNumbersRWM1[key] = value
      }
    })

    //grade the next module of reading easy
    if(Object.keys(wrongNumbersRWM1).length() >= 10){
      Object.entries(currentAnswersReading).map(([key, value]) => {
        //add object pair into rightNumbers if correct, wrongNumbers if incorrect
        if(value == SAT2023PT3RWM2a[key]){
          rightNumbers[key] = value
        } else {
          wrongNumbers[key] = value
          wrongNumbersRWM2[key] = value
        }
      }) //or hard
    } else if(Object.keys(wrongNumbersRWM1).length() <= 10) {
      Object.entries(currentAnswersReading).map(([key, value]) => {
        //add object pair into rightNumbers if correct, wrongNumbers if incorrect
        if(value == SAT2023PT3RWM2b[key]){
          rightNumbers[key] = value
        } else {
          wrongNumbers[key] = value
          wrongNumbersRWM2[key] = value
        }
      })
    }

    //see which category each wrong answer matches to for module 1 rw
    Object.keys(SAT2023PT3RWM1BD).map((q) => {
      if(wrongNumbersRWM1.hasOwnProperty(q)){
        categories.push(SAT2023PT3RWM1BD[q].skill)
        categoriesRWM1.push(SAT2023PT3RWM1BD[q].skill)
      }

      if(wrongNumbers.hasOwnProperty(q)){
        difficulties.push(SAT2023PT3RWM1BD[q].difficulty)
      }
    })

    //categorize module 2a for reading
    if(Object.keys(wrongNumbersRWM1).length() >= 10){
      Object.keys(SAT2023PT3RWM2ABD).map((q) => {
        if(wrongNumbers.hasOwnProperty(q)){
          categories.push(SAT2023PT3RWM2ABD[q].skill)
          categoriesRWM2.push(SAT2023PT3RWM1BD[q].skill)
        }

        if(wrongNumbers.hasOwnProperty(q)){
          difficulties.push(SAT2023PT3RWM2ABD[q].difficulty)
        }
      })
    }

    //categorize module 2b for reading
    if(Object.keys(wrongNumbersRWM1).length() <= 10){
      //loop through answer key
      Object.keys(SAT2023PT3RWM2ABD).map((q) => {
        if(wrongNumbers.hasOwnProperty(q)){
          categories.push(SAT2023PT3RWM2ABD[q].skill)
          categoriesRWM2.push(SAT2023PT3RWM1BD[q].skill)
        }

        if(wrongNumbers.hasOwnProperty(q)){
          difficulties.push(SAT2023PT3RWM2ABD[q].difficulty)
        }
      })
    }

    //grade the first module of math
    Object.entries(currentAnswersMath).map(([key, value]) => {
      if(value == SAT2023PT3MM1[key]){
        rightNumbers[key] = value
      } else {
        wrongNumbers[key] = value
        wrongNumbersMM1[key] = value
      }
    })

    //grade the next module of math easy
    if(Object.keys(wrongNumbersMM1).length() >= 10){
      //loop through currentanswers
      Object.entries(currentAnswersMath).map(([key, value]) => {
        //add object pair into rightNumbers if correct, wrongNumbers if incorrect
        if(value == SAT2023PT3MM2A[key]){
          rightNumbers[key] = value
        } else {
          wrongNumbersMM2[key] = value
        }
      }) //or hard
    } else if(Object.keys(wrongNumbersMM1).length() <= 10) {
      Object.entries(currentAnswersMath).map(([key, value]) => {
        //add object pair into rightNumbers if correct, wrongNumbers if incorrect
        if(value == SAT2023PT3MM2B[key]){
          rightNumbers[key] = value
        } else {
          wrongNumbersMM2[key] = value
        }
      })
    }

    //see which category each wrong answer matches to for module 1 math
    Object.keys(SAT2023PT3MM1BD).map((q) => {
      if(wrongNumbersMM1.hasOwnProperty(q)){
        categories.push(SAT2023PT3MM1BD[q].skill)
        categoriesMM1.push(SAT2023PT3MM1BD[q].skill)
      }

      if(wrongNumbersMM1.hasOwnProperty(q)){
        difficulties.push(SAT2023PT3MM1BD[q].difficulty)
      }
    })

    //categorize module 2a for math
    if(Object.keys(wrongNumbersMM1).length() >= 10){
      Object.keys(SAT2023PT3MM2ABD).map((q) => {
        if(wrongNumbers.hasOwnProperty(q)){
          categories.push(SAT2023PT3MM2ABD[q].skill)
          categoriesMM2.push(SAT2023PT3MM2ABD[q].skill)
        }
        if(wrongNumbers.hasOwnProperty(q)){
          difficulties.push(SAT2023PT3MM2ABD[q].difficulty)
        }
      })
    }

    //categorize module 2b for math
    if(Object.keys(wrongNumbersMM2).length() >= 10){
      Object.keys(SAT2023PT3RWM2BBD).map((q) => {
        if(wrongNumbers.hasOwnProperty(q)){
          categories.push(SAT2023PT3RWM2BBD[q].skill)
          categoriesMM2.push(SAT2023PT3MM2BBD[q].skill)
        }

        if(wrongNumbers.hasOwnProperty(q)){
          difficulties.push(SAT2023PT3MM2BBD[q].difficulty)
        }
      })
    }

    const skills = generateSAT2023PT3Skills(
      categories, 
      difficulties
    )

    const skillsRWM1 = generateSAT2023PT3Skills(
      categories, 
      difficulties
    )

    const skillsRWM2A = generateSAT2023PT3Skills(
      categories,
      difficulties
    )

    const skillsRWM2B = generateSAT2023PT3Skills(
      categories,
      difficulties
    )
    
    return {
      rightNumbers, 
      wrongNumbers, 
      skills,
      skillsRWM1,
      skillsRWM2A,
      skillsRWM2B
    }
  }

  const generateSAT2023PT3Skills = (categories, difficulties) => {
    let wordsincontext = 0
    let textstructureandpurpose = 0
    let centralideasanddetails = 0
    let centralideasandpurpose = 0
    let commandoftext = 0
    let inferences = 0
    let boundaries = 0
    let formstructure = 0
    let transitions = 0
    let rhetorical = 0
    let commandofquant = 0
    let crosstext = 0

    let onevariable = 0
    let interpretinglinear = 0
    let systemsoflinear = 0
    let buildinglinear = 0
    let creatingone = 0
    let linearinequal = 0
    let graphinglinear = 0
    let expressionsincontext = 0
    let rationalexpressions = 0
    let rationalexponents = 0
    let graphingnonlinear = 0
    let creatingquadratic = 0
    let systemsofquadratic = 0
    let algebraicexpressions = 0
    let functionnotation = 0
    let solvingquadraticequations = 0
    let inferencesfromreports = 0
    let ratiosrates = 0
    let linearvsexpo = 0
    let measurement = 0
    let handlingcategorical = 0
    let statistics = 0
    let scatter = 0
    let shapes = 0
    let triangles = 0
    let volume = 0
    let trigratios = 0
    let circleequations = 0
    let circlearcs = 0

    let bronze = 0
    let silver = 0
    let gold = 0
    
    categories.map((category) => {
      switch(category){
        case 'Words in Context':
          wordsincontext+=1
          break;
        case 'Text Structure and Purpose':
          textstructureandpurpose+=1
          break;
        case 'Central Ideas and Details':
          centralideasanddetails+=1
          break;
        case 'Central Ideas and Purpose':
          centralideasandpurpose+=1
        break;
        case 'Cross-Text Connections':
          crosstext+=1
          break;
        case 'Command of Textual Evidence':
          commandoftext+=1
          break;
        case 'Inferences':
          inferences+=1
          break;
        case 'Boundaries':
          boundaries+=1
          break;
        case 'Form Structure and Sense':
          formstructure+=1
          break;
        case 'Transitions':
          transitions+=1
          break;
        case 'Rhetorical Synthesis':
          rhetorical+=1
          break;
        case 'Command of Quantiative Evidence':
          commandofquant+=1
          break;
        case 'One-Variable Equations':
          onevariable+=1
          break;
        case 'Interpreting Linear Functions':
          interpretinglinear+=1
          break;
        case 'Systems of Linear Equations':
          systemsoflinear+=1
          break;
        case 'Building Linear Functions':
          buildinglinear+=1
          break;
        case 'Creating one-variable equations':
          creatingone+=1
          break;
        case 'Linear Inequalities':
          linearinequal+=1
          break;
        case 'Graphing Linear Relationships':
          graphinglinear+=1
          break;
        case 'Expressions and Equations in Context':
          expressionsincontext+=1
          break;
        case 'Rational Expressions and Equations':
          rationalexpressions+=1
          break;
        case 'Rational Exponents and Radicals':
          rationalexponents+=1
          break;
        case 'Graphing Nonlinear Functions':
          graphingnonlinear+=1
          break;
        case 'Creating Quadratic and Exponential Functions':
          creatingquadratic+=1
          break;
        case 'Systems of Quadratic and Linear Functions':
          systemsofquadratic+=1
          break;
        case 'Algebraic Expressions':
          algebraicexpressions+=1
          break;
        case 'Function Notation':
          functionnotation+=1
          break;
        case 'Solving Quadratic Equations':
          solvingquadraticequations+=1
          break;
        case 'Inferences and Conclusions From Reports':
          inferencesfromreports+=1
          break;
        case 'Ratios, Rates and Proportions':
          ratiosrates+=1
          break;
        case 'Linear vs. Exponential Growth':
          linearvsexpo+=1
          break;
        case 'Measurement and Unit Conversion':
          measurement+=1
          break;
        case 'Handling Categorical Data':
          handlingcategorical+=1
          break;
        case 'Statistics - Shape, Center, Spread':
          statistics+=1
          break;
        case 'Scatterplots and Graphs':
          scatter+=1
          break;
        case '2D Shapes':
          shapes+=1
          break;
        case 'Triangles, Lines and Angles':
          triangles+=1
          break;
        case 'Volume':
          volume+=1
          break;
        case 'Trig. Ratios and Pythagorean Thm.':
          trigratios=+1
          break;
        case 'Circle Equations and Graphing':
          circleequations+=1
          break;
        case 'Circle Arcs, Angles and Chords':
          circlearcs+=1
          break;
      }
    })

    difficulties.map((difficulty) => {
      switch(difficulty){
        case 'Bronze':
          bronze+=1
          break;
        case 'Silver':
          silver+=1
          break;
        case 'Gold':
          gold+=1
          break;
      }
    })

    let skillImprovement = {
      skills:{},
      levels:{}
    }
  
    skillImprovement.skills['Words in Context'] = wordsincontext
    skillImprovement.skills['Text Structure and Purpose'] = textstructureandpurpose
    skillImprovement.skills['Central Ideas and Details'] = centralideasanddetails
    skillImprovement.skills['Central Ideas and Purpose'] = centralideasandpurpose
    skillImprovement.skills['Command of Text'] = commandoftext
    skillImprovement.skills['Inferences'] = inferences
    skillImprovement.skills['Boundaries'] = boundaries
    skillImprovement.skills['Form Structure'] = formstructure
    skillImprovement.skills['Transitions'] = transitions
    skillImprovement.skills['Rhetorical'] = rhetorical
    skillImprovement.skills['Command of Quant'] = commandofquant
    skillImprovement.skills['Cross Text'] = crosstext
    skillImprovement.levels['Bronze'] = bronze
    skillImprovement.levels['Silver'] = silver
    skillImprovement.levels['Gold'] = gold

    return skillImprovement
  }

  return {gradeSAT2023PT3, generateSAT2023PT3Skills}
}

export default useGrade