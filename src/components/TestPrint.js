import './TestPrint.css'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4',
    padding: 10,
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
    <Page size="A4" style={styles.page}>
      <View style={styles.row}>
        <View style={styles.sectiongrow}>
          <Text>{currentStudent}</Text>
          <Text>{info.name}</Text>
        </View>
        <View style={styles.section}>
          <Text>{info.date}</Text>
        </View>
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

    </Page>
    </Document>
  )
}

export default TestPrint