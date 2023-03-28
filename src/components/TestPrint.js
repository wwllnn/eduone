import './TestPrint.css'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 20,
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
  sectionrowdiff:{
    margin: '10 10 20 10',
    flexDirection: 'row',
    borderBottom: '1px solid black',
  }
});

const TestPrint = ({ info, currentStudent }) => {

  const readingNumberWrong = 54 - 
    info.categories.skillsRW.levels.Bronze -
    info.categories.skillsRW.levels.Silver -
    info.categories.skillsRW.levels.Gold
    

  const mathNumberWrong = 44-
    info.categories.skillsRW.levels.Bronze-
    info.categories.skillsRW.levels.Silver-
    info.categories.skillsRW.levels.Gold


  return (
    <Document>
    <Page size='A4' style={styles.page}>
    <View>
        <View style={styles.row}>
          <View style={styles.sectiongrow}>
            <Text>Education One</Text>
          </View>
          <View>
            <Text>{info.date}</Text>
            <Text>Sugar Land</Text>
          </View>
        </View>

        <View>
          <View style={styles.sectiongrow}>
            <Text>{currentStudent}</Text>
            <Text>{info.name}</Text>
          </View>
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
                justifyContent: 'space-around', 
                backgroundColor: 'maroon',
                color: 'white'
              }}>
          <Text>Reading/Writing</Text>
          <Text>Math</Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text>{info.readingScore}</Text>
          <Text>{info.mathScore}</Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text>{`${readingNumberWrong}/54`}</Text>
          <Text>{`${mathNumberWrong}/44`}</Text>
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
          <Text style={{flex: 1, textAlign: 'center'}}>85</Text>
          <Text style={{flex: 1, textAlign: 'center'}}>90</Text>
          <Text style={{flex: 1, textAlign: 'center'}}>175</Text>
        </View>
      </View>
    </Page>

    <Page size="A4" style={styles.page}>
      <View>
        <View style={styles.row}>
          <View style={styles.sectiongrow}>
            <Text>Education One</Text>
          </View>
          <View>
            <Text>{info.date}</Text>
            <Text>Sugar Land</Text>
          </View>
        </View>

        <View>
          <View style={styles.sectiongrow}>
            <Text>{currentStudent}</Text>
            <Text>{info.name}</Text>
          </View>
        </View>
      </View>

      <View>
        <Text>Reading and Writing</Text>
      </View>
      <View style={styles.section}>
      {
        Object.entries(info.categories.skillsRW.levels).map(([key, value]) => {
          return (
          <View key={key} style={styles.sectionrowdiff}>
            <Text style={styles.sectiongrow}>{key} </Text>
            <Text>{value}</Text>
          </View>
          )
        })
      }

        <View style={styles.row}>
          <Text style={styles.sectiongrow}>Boundaries</Text>
          <Text>{info.categories.skillsRW.skills['Boundaries']}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.sectiongrow}>Central Ideas and Details</Text>
          <Text>{info.categories.skillsRW.skills['Central Ideas and Details']}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.sectiongrow}>Central Ideas and Purpose</Text>
          <Text>{info.categories.skillsRW.skills['Central Ideas and Purpose']}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.sectiongrow}>Command of Quantitative Evidence</Text>
          <Text>{info.categories.skillsRW.skills['Command of Quantitative Evidence']}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.sectiongrow}>Command of Textual Evidence</Text>
          <Text>{info.categories.skillsRW.skills['Command of Textual Evidence']}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.sectiongrow}>Cross-Text Connections</Text>
          <Text>{info.categories.skillsRW.skills['Cross-Text Connections']}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.sectiongrow}>Form Structure and Sense</Text>
          <Text>{info.categories.skillsRW.skills['Form Structure and Sense']}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.sectiongrow}>Inferences</Text>
          <Text>{info.categories.skillsRW.skills['Inferences']}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.sectiongrow}>Rhetorical Synthesis</Text>
          <Text>{info.categories.skillsRW.skills['Rhetorical Synthesis']}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.sectiongrow}>Text Structure and Purpose</Text>
          <Text>{info.categories.skillsRW.skills['Text Structure and Purpose']}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.sectiongrow}>Transitions</Text>
          <Text>{info.categories.skillsRW.skills['Transitions']}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.sectiongrow}>Words in Context</Text>
          <Text>{info.categories.skillsRW.skills['Words in Context']}</Text>
        </View>
        
 
      </View>
    </Page>
    <Page size="A4" style={styles.page}>
      <View>
        <View style={styles.row}>
          <View style={styles.sectiongrow}>
            <Text>Education One</Text>
          </View>
          <View>
            <Text>{info.date}</Text>
            <Text>Sugar Land</Text>
          </View>
        </View>

        <View>
          <View style={styles.sectiongrow}>
            <Text>{currentStudent}</Text>
            <Text>{info.name}</Text>
          </View>
        </View>
      </View>

      <View>
        <Text>Math</Text>
      </View>
      {
        Object.entries(info.categories.skillsM.levels).map(([key, value]) => {
          return (
          <View key={key} style={styles.sectionrowdiff}>
            <Text style={styles.sectiongrow}>{key} </Text>
            <Text>{value}</Text>
          </View>
          )
        })
      }
      <View style={styles.row}>
        <Text style={styles.sectiongrow}>Algebraic Expressions</Text>
        <Text>{info.categories.skillsM.skills['Algebraic Expressions']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.sectiongrow}>2D Shapes</Text>
        <Text>{info.categories.skillsM.skills['2D Shapes']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.sectiongrow}>Building Linear Functions</Text>
        <Text>{info.categories.skillsM.skills['Building Linear Functions']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.sectiongrow}>Circle Arc, Angles and Chords</Text>
        <Text>{info.categories.skillsM.skills['Circle Arc, Angles and Chords']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.sectiongrow}>2D Shapes</Text>
        <Text>{info.categories.skillsM.skills['Circle Equations and Graphing']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.sectiongrow}>Creating Quadratic and Exponential Functions</Text>
        <Text>{info.categories.skillsM.skills['Creating Quadratic and Exponential Functions']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.sectiongrow}>Creating One-Variable Equations</Text>
        <Text>{info.categories.skillsM.skills['Creating One-Variable Equations']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.sectiongrow}>Expressions and Equations in Context</Text>
        <Text>{info.categories.skillsM.skills['Expressions and Equations in Context']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.sectiongrow}>Graphing Linear Relationships</Text>
        <Text>{info.categories.skillsM.skills['Graphing Linear Relationships']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.sectiongrow}>Graphing Nonlinear Functions</Text>
        <Text>{info.categories.skillsM.skills['Graphing Nonlinear Functions']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.sectiongrow}>Interpreting Linear Functions</Text>
        <Text>{info.categories.skillsM.skills['Interpreting Linear Functions']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.sectiongrow}>Linear Inequalities</Text>
        <Text>{info.categories.skillsM.skills['Linear Inequalities']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.sectiongrow}>Linear vs. Exponential Growth</Text>
        <Text>{info.categories.skillsM.skills['Linear vs. Exponential Growth']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.sectiongrow}>One-Variable Equations</Text>
        <Text>{info.categories.skillsM.skills['One-Variable Equations']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.sectiongrow}>Rational Exponents and Radicals</Text>
        <Text>{info.categories.skillsM.skills['Rational Exponents and Radicals']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.sectiongrow}>Rational Expressions and Equations</Text>
        <Text>{info.categories.skillsM.skills['Rational Expressions and Equations']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.sectiongrow}>Ratios, Rates and Proportions</Text>
        <Text>{info.categories.skillsM.skills['Ratios, Rates and Proportions']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.sectiongrow}>Scatterplots and Graphs</Text>
        <Text>{info.categories.skillsM.skills['Scatterplots and Graphs']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.sectiongrow}>Solving Quadratic Equations</Text>
        <Text>{info.categories.skillsM.skills['Solving Quadratic Equations']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.sectiongrow}>Statistics - Shape, Center, Spread</Text>
        <Text>{info.categories.skillsM.skills['Statistics - Shape, Center, Spread']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.sectiongrow}>Systems of Linear Equations</Text>
        <Text>{info.categories.skillsM.skills['Systems of Linear Equations']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.sectiongrow}>Triangles, Lines and Angles</Text>
        <Text>{info.categories.skillsM.skills['Triangles, Lines and Angles']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.sectiongrow}>Trig. Ratios and Pythagorean Thm.</Text>
        <Text>{info.categories.skillsM.skills['Trig. Ratios and Pythagorean Thm.']}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.sectiongrow}>Volume</Text>
        <Text>{info.categories.skillsM.skills['Volume']}</Text>
      </View>

    </Page>
    <Page>
      <View>
        <View style={styles.row}>
          <View style={styles.sectiongrow}>
            <Text>Education One</Text>
          </View>
          <View>
            <Text>{info.date}</Text>
            <Text>Sugar Land</Text>
          </View>
        </View>

        <View>
          <View style={styles.sectiongrow}>
            <Text>{currentStudent}</Text>
            <Text>{info.name}</Text>
          </View>
        </View>
      </View>
    </Page>
    </Document>
  )
}

export default TestPrint