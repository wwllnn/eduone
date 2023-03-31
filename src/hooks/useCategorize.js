import { 
  SAT2023PT3RWM1BD, 
  SAT2023PT3RWM2ABD,
  SAT2023PT3RWM2BBD,

  SAT2023PT3MM1BD,
  SAT2023PT3MM2ABD,
  SAT2023PT3MM2BBD,
} from '../data.js' 

const useCategorize = () => {

  //check current answers and creates object with incorrect question numbers and answers
  const generatereportSAT2023PT3 = (currentAnswersReading, currentAnswersMath) => {


    const countInArray = (array, what) => {
      var count = 0;
      for (var i = 0; i < array.length; i++) {
          if (array[i] === what) {
              count++;
          }
      }
      return count;
    }

    const module1RW = currentAnswersReading.slice(0, 27)
    const howManyWrongRW = countInArray(module1RW, 'clicked')

    const module1M = currentAnswersMath.slice(0, 27)
    const howManyWrongM = countInArray(module1M, 'clicked')

    const categoriesRW = {}
    const difficultiesRW = {}

    const categoriesM = {}
    const difficultiesM = {}

    //see which category each wrong answer matches to for module 1 rw
    //map over the answer key and if the wrong numbers has a matching key then
    //have a new pair with key and skill name added to the category object
    Object.keys(SAT2023PT3RWM1BD).map((q) => {
      if(currentAnswersReading[q-1] == 'clicked'){
        categoriesRW[q] = SAT2023PT3RWM1BD[q].skill
        difficultiesRW[q] = SAT2023PT3RWM1BD[q].difficulty
      }
    })

    //categorize module 2a for reading
    if(howManyWrongRW >= 10){
      Object.keys(SAT2023PT3RWM2ABD).map((q) => {
        if(currentAnswersReading[q-1] == 'clicked'){
          categoriesRW[q] = SAT2023PT3RWM2ABD[q].skill
          difficultiesRW[q] = SAT2023PT3RWM2ABD[q].difficulty
        }
      })
    }

    //categorize module 2b for reading
    if(howManyWrongRW <= 10){
      //loop through answer key
      Object.keys(SAT2023PT3RWM2BBD).map((q) => {
        if(currentAnswersReading[q-1] == 'clicked'){
          categoriesRW[q] = SAT2023PT3RWM2BBD[q].skill
          difficultiesRW[q] = SAT2023PT3RWM2BBD[q].difficulty
        }
      })
    }

    //see which category each wrong answer matches to for module 1 math
    Object.keys(SAT2023PT3MM1BD).map((q) => {
      if(currentAnswersMath[q-55] == 'clicked'){
        categoriesM[q] = SAT2023PT3MM1BD[q].skill
        difficultiesM[q] = SAT2023PT3MM1BD[q].difficulty
      }
    })

    //categorize module 2a for math
    if(howManyWrongM >= 10){
      Object.keys(SAT2023PT3MM2ABD).map((q) => {
        if(currentAnswersMath[q-55] == 'clicked'){
          categoriesM[q] = SAT2023PT3MM2ABD[q].skill
          difficultiesM[q] = SAT2023PT3MM2ABD[q].difficulty
        }
      })
    }

    //categorize module 2b for math
    if(howManyWrongM <= 10){
      Object.keys(SAT2023PT3MM2BBD).map((q) => {
        if(currentAnswersMath[q-55] == 'clicked'){
          categoriesM[q] = SAT2023PT3MM2BBD[q].skill
          difficultiesM[q] = SAT2023PT3MM2BBD[q].difficulty
        }
      })
    }

    const skillsRW = generateSAT2023PT3Skills(
      categoriesRW, 
      difficultiesRW
    )


    const skillsM = generateSAT2023PT3Skills(
      categoriesM,
      difficultiesM
    )

    console.log(skillsM.levels.Bronze)



    let bronzepercentrw = 0
    let silverpercentrw = 0
    let goldpercentrw = 0

    //get diff percentages for reading
    if(howManyWrongRW >= 10){
      bronzepercentrw = 100 - Math.round(skillsRW.levels['Bronze'] / 30 * 100)
      silverpercentrw = 100 - Math.round(skillsRW.levels['Silver'] / 22 * 100)
      goldpercentrw = 100 - Math.round(skillsRW.levels['Gold'] / 2 * 100)

    } else if (howManyWrongRW < 10){
      bronzepercentrw = 100 - Math.round(skillsRW.levels['Bronze'] / 17)
      silverpercentrw = 100 -Math.round(skillsRW.levels['Silver'] / 29 * 100)
      goldpercentrw = 100 - Math.round(skillsRW.levels['Gold'] / 6 * 100)
    }

    let wordsincontextp = 0
    let textstructureandpurposep = 0
    let crosstextp = 0
    let centralideasp = 0
    let commandquantp = 0
    let commandoftextualp = 0
    let formstructurep = 0
    let boundariesp = 0
    let transitionsp = 0
    let inferencesp = 0
    let rhetoricalsynthesisp = 0


    //get skill percentages for reading
    if(howManyWrongRW >= 10){
      //easy verison
      wordsincontextp = 100 - Math.round(skillsRW.skills['Words in Context'] / 11 * 100)
      textstructureandpurposep = 100 - Math.round(skillsRW.skills['Text Structure and Purpose'] / 3 * 100)
      crosstextp = 100 - Math.round(skillsRW.skills['Cross-Text Connections'] / 1 * 100)
      centralideasp = 100 - Math.round(skillsRW.skills['Central Ideas and Details'] / 5 * 100)
      commandquantp = 100 - Math.round(skillsRW.skills['Command of Quantitative Evidence'] / 3 * 100)
      commandoftextualp = 100 - Math.round(skillsRW.skills['Command of Textual Evidence'] / 4 * 100)
      formstructurep = 100 - Math.round(skillsRW.skills['Form Structure and Sense'] / 7 * 100)
      boundariesp = 100 - Math.round(skillsRW.skills['Boundaries'] / 6 * 100)
      transitionsp = 100 - Math.round(skillsRW.skills['Transitions'] / 5 * 100)
      rhetoricalsynthesisp = 100 - Math.round(skillsRW.skills['Rhetorical Synthesis'] / 6 * 100)
      inferencesp = 100 - Math.round(skillsRW.skills['Inferences'] / 3 * 100)
    } else if (howManyWrongRW < 10) {
      //rw module 2b
      wordsincontextp = 100 - Math.round(skillsRW.skills['Words in Context'] / 10 * 100)
      textstructureandpurposep = 100 - Math.round(skillsRW.skills['Text Structure and Purpose'] / 4 * 100)
      crosstextp = 100 - Math.round(skillsRW.skills['Cross-Text Connections'] / 1 * 100)
      centralideasp = 100 - Math.round(skillsRW.skills['Central Ideas and Details'] / 4 * 100)
      commandquantp = 100 - Math.round(skillsRW.skills['Command of Quantitative Evidence'] / 3 * 100) 
      commandoftextualp = 100 - Math.round(skillsRW.skills['Command of Textual Evidence'] / 4 * 100)
      formstructurep = 100 - Math.round(skillsRW.skills['Form Structure and Sense'] / 4 * 100)
      boundariesp = 100 - Math.round(skillsRW.skills['Boundaries'] / 8 * 100)
      transitionsp = 100 - Math.round(skillsRW.skills['Transitions'] / 4 * 100)
      rhetoricalsynthesisp = 100 - Math.round(skillsRW.skills['Rhetorical Synthesis'] / 8 * 100)
      inferencesp = 100 - Math.round(skillsRW.skills['Inferences'] / 4 * 100)
    }

    let bronzepercentm = 0
    let silverpercentm = 0
    let goldpercentm = 0

    //get cate percentages for math
    if(howManyWrongM >= 10){
      bronzepercentm = 100 - Math.round(skillsM.levels.Bronze / 28 * 100)
      silverpercentm = 100 - Math.round(skillsM.levels.Silver / 14 * 100)
      goldpercentm = 100 - Math.round(skillsM.levels.Gold / 2 * 100)
    } else if (howManyWrongM < 10){
      bronzepercentm = 100 - Math.round(skillsM.levels.Bronze / 20 * 100)
      silverpercentm = 100 - Math.round(skillsM.levels.Silver / 21 * 100)
      goldpercentm = 100 - Math.round(skillsM.levels.Gold / 3 * 100)
    }

    let onevariablep = 0
    let interpretlinp = 0
    let systemslinp = 0
    let buildinglinp = 0
    let expresscontextp = 0
    let rationalexpressp = 0
    let createquadp = 0
    let systemsquadp = 0
    let algebrexpressp = 0
    let solvingquadp = 0
    let ratiosp = 0
    let linearvsp = 0
    let statsp = 0
    let scatterp = 0
    let trianglesp = 0
    let circlearcsp = 0
    let creatingonep = 0
    let linearinequalp = 0
    let graphinglinearp = 0
    let graphingnonlinearp = 0
    let functionnotationp = 0
    let shapesp = 0 
    let trigratiosp = 0
    let volumep = 0
    let rationalexpop = 0

    //get skill percentages for math
    if(howManyWrongM >= 10){
      //easy version
      onevariablep = 100 - Math.round(skillsM.skills['One-Variable Equations']  / 6 * 100)
      interpretlinp = 100 - Math.round(skillsM.skills['Interpreting Linear Functions'] / 2 * 100)
      systemslinp = 100 - Math.round(skillsM.skills['Systems of Linear Equations'] / 2 * 100)
      buildinglinp = 100 - Math.round(skillsM.skills['Building Linear Functions'] / 3 * 100)
      expresscontextp = 100 - Math.round(skillsM.skills['Expressions and Equations in Context'] / 1 * 100)
      rationalexpressp = 100 - Math.round(skillsM.skills['Rational Expressions and Equations'] / 2 * 100)
      createquadp = 100 - Math.round(skillsM.skills['Creating Quadratic and Exponential Functions'] / 2 * 100)
      systemsquadp = 100 - Math.round(skillsM.skills['Systems of Quadratic and Linear Functions'] / 1 * 100)
      algebrexpressp = 100 - Math.round(skillsM.skills['Algebraic Expressions'] / 2 * 100)
      solvingquadp = 100 - Math.round(skillsM.skills['Solving Quadratic Equations'] / 3 * 100)
      ratiosp = 100 - Math.round(skillsM.skills['Ratios, Rates and Proportions'] / 2 * 100)
      linearvsp = 100 - Math.round(skillsM.skills['Linear vs. Exponential Growth'] / 1 * 100)
      statsp = 100 - Math.round(skillsM.skills['Statistics - Shape, Center, Spread'] / 2 * 100)
      scatterp = 100 - Math.round(skillsM.skills['Scatterplots and Graphs'] / 3 * 100)
      trianglesp = 100 - Math.round(skillsM.skills['Triangles, Lines and Angles'] / 3 * 100)
      circlearcsp = 100 - Math.round(skillsM.skills['Circle Arcs, Angles and Chords'] / 1 * 100)
      creatingonep = 100 - Math.round(skillsM.skills['Creating One-Variable Equations'] / 1 * 100)
      linearinequalp = 100 - Math.round(skillsM.skills['Linear Inequalities'] / 2 * 100)
      graphinglinearp = 100 - Math.round(skillsM.skills['Graphing Linear Relationships'] / 1 * 100)
      graphingnonlinearp = 100 - Math.round(skillsM.skills['Graphing Nonlinear Functions'] / 1 * 100)
      functionnotationp = 100 - Math.round(skillsM.skills['Function Notation'] / 1 * 100)
      shapesp = 100 - Math.round(skillsM.skills['2D Shapes'] / 2 * 100)


    } else if (howManyWrongM < 10){
      //hard version
      onevariablep = 100 - Math.round(skillsM.skills['One-Variable Equations'] / 5 * 100)
      interpretlinp = 100 - Math.round(skillsM.skills['Interpreting Linear Functions'] / 2 * 100)
      systemslinp = 100 - Math.round(skillsM.skills['Systems of Linear Equations'] / 3 * 100)
      buildinglinp = 100 - Math.round(skillsM.skills['Building Linear Functions'] / 3 * 100)
      expresscontextp = 100 - Math.round(skillsM.skills['Expressions and Equations in Context'] / 1 * 100)
      rationalexpressp = 100 - Math.round(skillsM.skills['Rational Expressions and Equations'] / 3 * 100)
      createquadp = 100 - Math.round(skillsM.skills['Creating Quadratic and Exponential Functions'] / 4 * 100)
      systemsquadp = 100 - Math.round(skillsM.skills['Systems of Quadratic and Linear Functions'] / 1 * 100)
      algebrexpressp = 100 - Math.round(skillsM.skills['Algebraic Expressions'] / 1 * 100)
      solvingquadp = 100 - Math.round(skillsM.skills['Solving Quadratic Equations'] / 5 * 100)
      ratiosp = 100 - Math.round(skillsM.skills['Ratios, Rates and Proportions'] / 2 * 100)
      linearvsp = 100 - Math.round(skillsM.skills['Linear vs. Exponential Growth'] / 1 * 100)
      statsp = 100 - Math.round(skillsM.skills['Statistics - Shape, Center, Spread'] / 3 * 100)
      scatterp = 100 - Math.round(skillsM.skills['Scatterplots and Graphs'] / 1 * 100)
      trianglesp = 100 - Math.round(skillsM.skills['Triangles, Lines and Angles'] / 3 * 100)
      trigratiosp = 100 - Math.round(skillsM.skills['Trig. Ratios and Pythagorean Thm.'] / 1 * 100)
      volumep = 100 - Math.round(skillsM.skills['Volume'] / 1 * 100)
      rationalexpop = 100 - Math.round(skillsM.skills['Rational Exponents and Radicals'] / 2 * 100)
      linearinequalp = 100 - Math.round(skillsM.skills['Linear Inequalities'] / 2 * 100)
    }

    const difficultyPercentages = {
      bronzepercentrw,
      silverpercentrw,
      goldpercentrw,
      bronzepercentm,
      silverpercentm,
      goldpercentm
    }

    const categoryPercentages = {
      readingP: {
        wordsincontextp,
        textstructureandpurposep,
        crosstextp,
        centralideasp,
        commandquantp,
        commandoftextualp,
        formstructurep,
        boundariesp,
        transitionsp,
        inferencesp,
        rhetoricalsynthesisp,
      },
      mathP: {
        onevariablep,
        interpretlinp,
        systemslinp,
        buildinglinp,
        expresscontextp,
        rationalexpressp,
        createquadp,
        systemsquadp,
        algebrexpressp,
        solvingquadp,
        ratiosp,
        linearvsp,
        statsp,
        scatterp,
        trianglesp,
        circlearcsp,
        creatingonep,
        linearinequalp,
        graphinglinearp,
        graphingnonlinearp,
        functionnotationp,
        shapesp,
        trigratiosp,
        volumep,
        rationalexpop
      }
    }


    const skillsObject = {
      skillsRW,
      skillsM,
      difficultyPercentages,
      categoryPercentages
    }
    
    return {
      skillsObject
    }
  }

  const generateSAT2023PT3Skills = (categories, difficulties) => {
    let wordsincontext = 0
    let textstructureandpurpose = 0
    let centralideasanddetails = 0
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
    let buildinglinear = 0
    let creatingone = 0
    let linearinequal = 0
    let graphinglinear = 0
    let expressionsincontext = 0
    let rationalexpressions = 0
    let rationalexponents = 0
    let graphingnonlinear = 0
    let creatingquadratic = 0
    let systemsoflinearequations = 0
    let systemsofquadraticandlinearfunctions = 0
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
    
    Object.entries(categories).map(([key, value]) => {
      switch(value){
        case 'Words in Context':
          wordsincontext+=1
          break;
        case 'Text Structure and Purpose':
          textstructureandpurpose+=1
          break;
        case 'Central Ideas and Details':
          centralideasanddetails+=1
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
          systemsoflinearequations+=1
          break;
        case 'Systems of Quadratic and Linear Functions':
          systemsofquadraticandlinearfunctions+=1
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

    Object.entries(difficulties).map(([key, value]) => {
      switch(value){
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
    skillImprovement.skills['Command of Textual Evidence'] = commandoftext
    skillImprovement.skills['Inferences'] = inferences
    skillImprovement.skills['Boundaries'] = boundaries
    skillImprovement.skills['Form Structure and Sense'] = formstructure
    skillImprovement.skills['Transitions'] = transitions
    skillImprovement.skills['Rhetorical Synthesis'] = rhetorical
    skillImprovement.skills['Command of Quantitative Evidence'] = commandofquant
    skillImprovement.skills['Cross-Text Connections'] = crosstext

    skillImprovement.skills['One-Variable Equations'] = onevariable
    skillImprovement.skills['Interpreting Linear Functions'] = interpretinglinear
    skillImprovement.skills['Systems of Linear Equations'] = systemsoflinearequations
    skillImprovement.skills['Systems of Quadratic and Linear Functions'] = systemsoflinearequations
    skillImprovement.skills['Building Linear Functions'] = buildinglinear
    skillImprovement.skills['Creating One-Variable Equations'] = creatingone
    skillImprovement.skills['Linear Inequalities'] = linearinequal
    skillImprovement.skills['Graphing Linear Relationships'] = graphinglinear
    skillImprovement.skills['Expressions and Equations in Context'] = expressionsincontext
    skillImprovement.skills['Rational Expressions and Equations'] = rationalexpressions
    skillImprovement.skills['Rational Exponents and Radicals'] = rationalexponents
    skillImprovement.skills['Graphing Nonlinear Functions'] = graphingnonlinear
    skillImprovement.skills['Creating Quadratic and Exponential Functions'] = creatingquadratic
    skillImprovement.skills['Algebraic Expressions'] = algebraicexpressions
    skillImprovement.skills['Function Notation'] = functionnotation
    skillImprovement.skills['Solving Quadratic Equations'] = solvingquadraticequations
    skillImprovement.skills['Inferences and Conclusions From Reports'] = inferencesfromreports
    skillImprovement.skills['Ratios, Rates and Proportions'] = ratiosrates
    skillImprovement.skills['Linear vs. Exponential Growth'] = linearvsexpo
    skillImprovement.skills['Measurement and Unit Conversion'] = measurement
    skillImprovement.skills['Handling Categorical Data'] = handlingcategorical
    skillImprovement.skills['Statistics - Shape, Center, Spread'] = statistics
    skillImprovement.skills['Scatterplots and Graphs'] = scatter
    skillImprovement.skills['2D Shapes'] = shapes
    skillImprovement.skills['Triangles, Lines and Angles'] = triangles
    skillImprovement.skills['Volume'] = volume
    skillImprovement.skills['Trig. Ratios and Pythagorean Thm.'] = trigratios
    skillImprovement.skills['Circle Equations and Graphing'] = circleequations
    skillImprovement.skills['Circle Arc, Angles and Chords'] = circlearcs

    skillImprovement.levels['Bronze'] = bronze
    skillImprovement.levels['Silver'] = silver
    skillImprovement.levels['Gold'] = gold

    return skillImprovement
  }

  return { generatereportSAT2023PT3 }
}

export default useCategorize