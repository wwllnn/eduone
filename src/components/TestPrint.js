import './TestPrint.css'
import { Image, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

import slogan from "./slogan.png"

//generates a PDF for SAT2023 PT3 results
const styles = StyleSheet.create({
  page: {
    padding: 40,
  },
  section: {
    margin: 10,
  },
  categories: {
  },
  row: {
    flexDirection: 'row',
  },
  sectiongrow:{
    flexGrow: 1
  },
  sectionrowdiffbronze:{
    padding: '5 10',
    flexDirection: 'row',
    fontWeight: 'bold',
    borderBottom: '1px solid lightgray',
    fontSize: 13
  },
  sectionrowdiffsilver:{
    padding: '5 10',
    flexDirection: 'row',
    fontWeight: 'bold',
    borderBottom: '1px solid lightgray',
    fontSize: 13
  },
  sectionrowdiffgold:{
    padding: '5 10',
    flexDirection: 'row',
    fontWeight: 'bold',
    borderBottom: '1px solid lightgray',
    fontSize: 13
  }
});

const TestPrint = ({ info, currentStudent }) => {

  const readingNumberWrong = (54 - 
    info.categories.skillsRW.levels.Bronze -
    info.categories.skillsRW.levels.Silver -
    info.categories.skillsRW.levels.Gold)
    

  const mathNumberWrong = (44-
    info.categories.skillsM.levels.Bronze-
    info.categories.skillsM.levels.Silver-
    info.categories.skillsM.levels.Gold)

  const readingRX = (
    (800 - info.readingScore) * .6
  )

  const mathRX = (
    (800 - info.mathScore) * .6
  )

  const totalRX = (
    Number(readingRX) + Number(mathRX)
  )

  return (
    <Document>
    <Page size='A4' style={styles.page}>
    <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

            <View>
              <Image src={slogan} style={{height: '40px', objectFit: 'contain'}}/>
            </View>

            <View>
              <Text>{info.date}</Text>
              <Text>Sugar Land</Text>
            </View>

        </View>

          <View style={{marginTop: 10}} >
            <Text>{currentStudent}</Text>
            <Text>SAT 2023</Text>
          </View>
      </View>
      <View style={{textAlign: 'center', margin: 10, border: '1px solid black'}}>
        <Text style={{backgroundColor: 'grey'}}>SAT Insight Scores</Text>
        <Text>Composite Score</Text>
        <Text>{info.compositeScore}</Text>
      </View>

      <View style={{border: '1px solid black', margin: 10}}>
        <View style={{
                display: 'flex', 
                flexDirection: 'row', 
                backgroundColor: 'maroon',
                color: 'white',
              }}>
          <Text style={{flex: 1, textAlign: 'center'}}>Reading/Writing</Text>
          <Text style={{flex: 1, textAlign: 'center'}}>Math</Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={{flex: 1, textAlign: 'center'}}>{info.readingScore}</Text>
          <Text style={{flex: 1, textAlign: 'center'}}>{info.mathScore}</Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={{flex: 1, textAlign: 'center'}}>{`${readingNumberWrong}/54`}</Text>
          <Text style={{flex: 1, textAlign: 'center'}}>{`${mathNumberWrong}/44`}</Text>
        </View>
      </View>

      <View>
        <Text>Recommended Hours of Study for Mastery</Text>
      </View>

      <View style={{border: '1px solid black', margin: 10}}>
        <View style={{
                display: 'flex', 
                flexDirection: 'row',
                color: 'white'
              }}>
          <View style={{backgroundColor: 'darkgreen', flex: 1, textAlign: 'center'}}>
            <Text> Read/Write RX </Text>
          </View>
          <View style={{backgroundColor: 'royalblue', flex: 1, textAlign: 'center'}}>
            <Text> Math RX </Text>
          </View>
          <View style={{backgroundColor: 'firebrick', flex: 1, textAlign: 'center'}}>
            <Text> Total Hours </Text>
          </View>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={{flex: 1, textAlign: 'center'}}>{readingRX}</Text>
          <Text style={{flex: 1, textAlign: 'center'}}>{mathRX}</Text>
          <Text style={{flex: 1, textAlign: 'center'}}>{totalRX}</Text>
        </View>
      </View>
    </Page>

    <Page size="A4" style={styles.page}>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Image src={slogan} style={{height: '40px', objectFit: 'contain'}}/>
        </View>
        <View style={{textAlign: 'flex-end'}}>
          <Text style={{fontSize: 14}}>{info.date}</Text>
          <Text  style={{fontSize: 14}}>Sugar Land</Text>
        </View>
      </View>
      <View style={{border: '1px solid black', marginTop: 10}}>
        <View>
            <View style={{flexGrow: 1, margin: 10, alignItems: 'center'}}>
              <Text style={{fontSize: 15}}>{currentStudent}</Text>
              <Text style={{fontSize: 15}}>{info.name}</Text>
            </View>

            <View style={{backgroundColor: 'maroon', color: 'white', marginLeft: 10, marginRight: 10, padding: 5, }}>
              <Text style={{fontSize: 14, marginLeft: 10, textAlign: 'center'}}>Reading and Writing</Text>
            </View>
        </View>


      <View style={{margin: '0 10'}}>

        <View style={{marginBottom: 10, border: '1px solid black'}}>
          <View style={{flexDirection: 'row',backgroundColor: 'lightgray', padding: 5}}>
            <Text style={{flexGrow: 1, fontSize: 13}}>Difficulty Levels</Text>
            <Text style={{fontSize: 13}}>Mastery %</Text>
          </View>
          <View style={styles.sectionrowdiffbronze}>
            <Text style={{flexGrow: 1, fontSize: 13}}>Bronze</Text>
            <Text>{info.categories.skillsRW.levels.Bronze}</Text>
          </View>

          <View style={styles.sectionrowdiffsilver}>
            <Text style={{flexGrow: 1,fontSize: 13}}>Silver</Text>
            <Text>{info.categories.skillsRW.levels.Silver}</Text>
          </View>

          <View style={styles.sectionrowdiffgold}>
            <Text style={{flexGrow: 1, fontSize: 13}}>Gold</Text>
            <Text>{info.categories.skillsRW.levels.Gold}</Text>
          </View>
        </View>

        <View style={{backgroundColor: 'maroon', color: 'white', flexDirection: 'row'}}>
          <View style={{flex: 1, padding: 5, alignItems: 'center'}}>
            <Text style={{fontSize: 13}}>Category</Text>
          </View>
          <View style={{flex: 1, padding: 5, alignItems: 'center'}}>
            <Text style={{fontSize: 13}}>Mastery</Text>
          </View>
          <View style={{flex: 1, padding: 5, alignItems: 'center'}}>
            <Text style={{fontSize: 13}}>RX Hours</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 13}}>Boundaries</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 13}}>{info.categories.categoryPercentages.readingP.boundariesp}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 13}}>5</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px'}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 13}}>Central Ideas and Details</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 13}}>{info.categories.categoryPercentages.readingP.centralideasp}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 13}}>5</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px'}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 13}}>Command of Quantitative Evidence</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 13}}>{info.categories.categoryPercentages.readingP.commandquantp}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 13}}>5</Text>
            </View>
        </View>

        <View style={{flexDirection: 'row', marginTop: '-1px'}}>
            <View style={{flex: 1, border: '1px solid lightgray', padding: 5, alignItems: 'center'}}>
              <Text style={{fontSize: 13}}>Command of Textual Evidence</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 13}}>{info.categories.categoryPercentages.readingP.commandquantp}%</Text>
            </View>
            <View style={{flex: 1, border: '1px solid lightgray', marginLeft: '-1px', padding: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 13}}>5</Text>
            </View>
        </View>


        <View style={{flexDirection: 'row', borderBottom: '1px solid lightgray'}}>
          <Text style={{fontSize: 13, marginBottom: 5, flexGrow: 1}}>Command of Textual Evidence</Text>
          <Text style={{fontSize: 13}}>{info.categories.skillsRW.skills['Command of Textual Evidence']}</Text>
          <Text style={{fontSize: 13, flexGrow: 1, border: '1px solid lightgray'}}>5</Text>
        </View>

        <View style={{flexDirection: 'row', borderBottom: '1px solid lightgray'}}>
          <Text style={{fontSize: 13, marginBottom: 5, flexGrow: 1}}>Cross-Text Connections</Text>
          <Text style={{fontSize: 13}}>{info.categories.skillsRW.skills['Cross-Text Connections']}</Text>
          <Text style={{fontSize: 13, flexGrow: 1, border: '1px solid lightgray'}}>5</Text>
        </View>

        <View style={{flexDirection: 'row', borderBottom: '1px solid lightgray'}}>
          <Text style={{fontSize: 13, marginBottom: 5, flexGrow: 1}}>Form Structure and Sense</Text>
          <Text style={{fontSize: 13}}>{info.categories.skillsRW.skills['Form Structure and Sense']}</Text>
          <Text style={{fontSize: 13, flexGrow: 1, border: '1px solid lightgray'}}>5</Text>
        </View>

        <View style={{flexDirection: 'row', borderBottom: '1px solid lightgray'}}>
          <Text style={{fontSize: 13, marginBottom: 5, flexGrow: 1}}>Inferences</Text>
          <Text style={{fontSize: 13}}>{info.categories.skillsRW.skills['Inferences']}</Text>
          <Text style={{fontSize: 13, flexGrow: 1, border: '1px solid lightgray'}}>5</Text>
        </View>

        <View style={{flexDirection: 'row', borderBottom: '1px solid lightgray'}}>nm
          <Text style={{fontSize: 13, marginBottom: 5, flexGrow: 1}}>Rhetorical Synthesis</Text>
          <Text style={{fontSize: 13}}>{info.categories.skillsRW.skills['Rhetorical Synthesis']}</Text>
          <Text style={{fontSize: 13, flexGrow: 1, border: '1px solid lightgray'}}>5</Text>
        </View>

        <View style={{flexDirection: 'row', borderBottom: '1px solid lightgray'}}>
          <Text style={{fontSize: 13, marginBottom: 5, flexGrow: 1}}>Text Structure and Purpose</Text>
          <Text style={{fontSize: 13}}>{info.categories.skillsRW.skills['Text Structure and Purpose']}</Text>
          <Text style={{fontSize: 13, flexGrow: 1, border: '1px solid lightgray'}}>5</Text>
        </View>

        <View style={{flexDirection: 'row', borderBottom: '1px solid lightgray'}}>
          <Text style={{fontSize: 13, marginBottom: 5, flexGrow: 1}}>Transitions</Text>
          <Text style={{fontSize: 13}}>{info.categories.skillsRW.skills['Transitions']}</Text>
          <Text style={{fontSize: 13, flexGrow: 1, border: '1px solid lightgray'}}>5</Text>
        </View>

        <View style={{flexDirection: 'row', borderBottom: '1px solid lightgray'}}>
          <Text style={{fontSize: 13, marginBottom: 5, flexGrow: 1}}>Words in Context</Text>
          <Text style={{fontSize: 13}}>{info.categories.skillsRW.skills['Words in Context']}</Text>
          <Text style={{fontSize: 13, flexGrow: 1, border: '1px solid lightgray'}}>5</Text>
        </View>
        
        </View>
      </View>
    </Page>
    <Page size="A4" style={styles.page}>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Image src={slogan} style={{height: '40px', objectFit: 'contain'}}/>
          </View>
          <View>
            <Text>{info.date}</Text>
            <Text>Sugar Land</Text>
          </View>
        </View>

        <View style={styles.sectiongrow}>
          <Text style={{fontWeight: 'bold', margin: '10px 0'}}>{currentStudent}</Text>
          <Text>{info.name}</Text>
        </View>
      <View>
        <Text>Math</Text>
      </View>
      <View styles={styles.section}>
        
        <View styles={{marginBottom: 10}}>
          <View style={styles.sectionrowdiffbronze}>
            <Text style={{flexGrow: 1}}>Bronze</Text>
            <Text>{info.categories.skillsM.levels.Bronze}</Text>
          </View>

          <View style={styles.sectionrowdiffsilver}>
            <Text style={{flexGrow: 1}}>Silver</Text>
            <Text>{info.categories.skillsM.levels.Silver}</Text>
          </View>

          <View style={styles.sectionrowdiffgold}>
            <Text style={{flexGrow: 1}}>Gold</Text>
            <Text>{info.categories.skillsM.levels.Gold}</Text>
          </View>
        </View>

      <View style={styles.row}>
        <Text style={{fontSize: 13, marginBottom: 5, flexGrow: 1}}>Algebraic Expressions</Text>
        <Text style={{fontSize: 13}}>{info.categories.skillsM.skills['Algebraic Expressions']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={{fontSize: 13, marginBottom: 5, flexGrow: 1}}>2D Shapes</Text>
        <Text style={{fontSize: 13}}>{info.categories.skillsM.skills['2D Shapes']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={{fontSize: 13, marginBottom: 5, flexGrow: 1}}>Building Linear Functions</Text>
        <Text style={{fontSize: 13}}>{info.categories.skillsM.skills['Building Linear Functions']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={{fontSize: 13, marginBottom: 5, flexGrow: 1}}>Circle Arc, Angles and Chords</Text>
        <Text style={{fontSize: 13}}>{info.categories.skillsM.skills['Circle Arc, Angles and Chords']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={{fontSize: 13, marginBottom: 5, flexGrow: 1}}>2D Shapes</Text>
        <Text style={{fontSize: 13}}>{info.categories.skillsM.skills['Circle Equations and Graphing']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={{fontSize: 13, marginBottom: 5, flexGrow: 1}}>Creating Quadratic and Exponential Functions</Text>
        <Text style={{fontSize: 13}}>{info.categories.skillsM.skills['Creating Quadratic and Exponential Functions']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={{fontSize: 13, marginBottom: 5, flexGrow: 1}}>Creating One-Variable Equations</Text>
        <Text style={{fontSize: 13}}>{info.categories.skillsM.skills['Creating One-Variable Equations']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={{fontSize: 13, marginBottom: 5, flexGrow: 1}}>Expressions and Equations in Context</Text>
        <Text style={{fontSize: 13}}>{info.categories.skillsM.skills['Expressions and Equations in Context']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={{fontSize: 13, marginBottom: 5, flexGrow: 1}}>Graphing Linear Relationships</Text>
        <Text style={{fontSize: 13}}>{info.categories.skillsM.skills['Graphing Linear Relationships']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={{fontSize: 13, marginBottom: 5, flexGrow: 1}}>Graphing Nonlinear Functions</Text>
        <Text style={{fontSize: 13}}>{info.categories.skillsM.skills['Graphing Nonlinear Functions']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={{fontSize: 13, marginBottom: 5, flexGrow: 1}}>Interpreting Linear Functions</Text>
        <Text style={{fontSize: 13}}>{info.categories.skillsM.skills['Interpreting Linear Functions']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={{fontSize: 13, marginBottom: 5, flexGrow: 1}}>Linear Inequalities</Text>
        <Text style={{fontSize: 13}}>{info.categories.skillsM.skills['Linear Inequalities']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={{fontSize: 13, marginBottom: 5, flexGrow: 1}}>Linear vs. Exponential Growth</Text>
        <Text style={{fontSize: 13}}>{info.categories.skillsM.skills['Linear vs. Exponential Growth']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={{fontSize: 13, marginBottom: 5, flexGrow: 1}}>One-Variable Equations</Text>
        <Text style={{fontSize: 13}}>{info.categories.skillsM.skills['One-Variable Equations']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={{fontSize: 13, marginBottom: 5, flexGrow: 1}}>Rational Exponents and Radicals</Text>
        <Text style={{fontSize: 13}}>{info.categories.skillsM.skills['Rational Exponents and Radicals']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={{fontSize: 13, marginBottom: 5, flexGrow: 1}}>Rational Expressions and Equations</Text>
        <Text style={{fontSize: 13}}>{info.categories.skillsM.skills['Rational Expressions and Equations']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={{fontSize: 13, marginBottom: 5, flexGrow: 1}}>Ratios, Rates and Proportions</Text>
        <Text style={{fontSize: 13}}>{info.categories.skillsM.skills['Ratios, Rates and Proportions']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={{fontSize: 13, marginBottom: 5, flexGrow: 1}}>Scatterplots and Graphs</Text>
        <Text style={{fontSize: 13}}>{info.categories.skillsM.skills['Scatterplots and Graphs']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={{fontSize: 13, marginBottom: 5, flexGrow: 1}}>Solving Quadratic Equations</Text>
        <Text style={{fontSize: 13}}>{info.categories.skillsM.skills['Solving Quadratic Equations']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={{fontSize: 13, marginBottom: 5, flexGrow: 1}}>Statistics - Shape, Center, Spread</Text>
        <Text style={{fontSize: 13}}>{info.categories.skillsM.skills['Statistics - Shape, Center, Spread']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={{fontSize: 13, marginBottom: 5, flexGrow: 1}}>Systems of Linear Equations</Text>
        <Text style={{fontSize: 13}}>{info.categories.skillsM.skills['Systems of Linear Equations']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={{fontSize: 13, marginBottom: 5, flexGrow: 1}}>Triangles, Lines and Angles</Text>
        <Text style={{fontSize: 13}}>{info.categories.skillsM.skills['Triangles, Lines and Angles']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={{fontSize: 13, marginBottom: 5, flexGrow: 1}}>Trig. Ratios and Pythagorean Thm.</Text>
        <Text style={{fontSize: 13}}>{info.categories.skillsM.skills['Trig. Ratios and Pythagorean Thm.']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={{fontSize: 13, marginBottom: 5, flexGrow: 1}}>Volume</Text>
        <Text style={{fontSize: 13}}>{info.categories.skillsM.skills['Volume']}</Text>
      </View>
      </View>

    </Page>
    </Document>
  )
}

export default TestPrint