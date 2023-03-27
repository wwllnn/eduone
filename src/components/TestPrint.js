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
    margin: 10,
    flexGrow: 1
  },
  sectionrowdiff:{
    margin: '10 10 20 10',
    flexDirection: 'row',
    borderBottom: '1px solid black',
  }
});

const TestPrint = ({ info, currentStudent }) => {
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
        <Text style={{color: 'blue', fontSize: '1.5rem'}}>1460</Text>
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
          <Text>760</Text>
          <Text>700</Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text>35/52</Text>
          <Text>26/58</Text>
        </View>
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
          <Text style={{flexGrow: 1}}>85</Text>
          <Text style={{flexGrow: 1}}>90</Text>
          <Text style={{flexGrow: 1}}>175</Text>
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
        Object.entries(info.categories.levels).map(([key, value]) => {
          return (
          <View key={key} style={styles.sectionrowdiff}>
            <Text style={styles.sectiongrow}>{key} </Text>
            <Text>{value}</Text>
          </View>
          )
        })
      }
      {
        Object.entries(info.categories.skills).map(([key, value]) => {
          return (
          <View key={key} style={styles.row}>
            <Text style={styles.sectiongrow}>{key} </Text>
            <Text>{value}</Text>
          </View>
          )
        })
      }
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

      <View>
        <Text>Math</Text>
      </View>
      {
        Object.entries(info.categories.levels).map(([key, value]) => {
          return (
          <View key={key} style={styles.sectionrowdiff}>
            <Text style={styles.sectiongrow}>{key} </Text>
            <Text>{value}</Text>
          </View>
          )
        })
      }

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