import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    height: "100%",
    backgroundColor: "#E4E4E4",
    padding: "16px",
  },
  table: {
    width: "100%",
    marginTop: "16px",
    borderCollapse: "collapse",
    borderSpacing: 0,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableHeaderRow: {
    backgroundColor: "#fafafa",
  },

  tableHeaderCell: {
    backgroundColor: "#fafafa",
    color: "rgba(0, 0, 0, 0.88)",
    flexDirection: "row",
    border: "1px solid #f0f0f0",
    paddingTop: "6px",
    paddingBottom: "6px",
   
  },
  tableRowCol:{
    // paddingLeft: "11px",
    // paddingRight: "27px",
    width:"20%"
  },
  tableDataCell: {
    backgroundColor: "white",
    color: "rgba(0, 0, 0, 0.88)",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: "8px",
    paddingRight: "8px",
    border: "1px solid #f0f0f0",
    height: "40px",
  },
  span: {
    fontSize: "9px",
  },
  headerText: {
    fontSize: "10px",
  },
  textCoverBox: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px",
    borderBottomRightRadius: "8px",
    borderBottomLeftRadius: "8px",
    // paddingLeft: "3px",
    // paddingRight: "3px",
    border: "1px solid #d9d9d9",
    // backgroundColor: "lightgreen",
    // paddingTop:"4px",
    // paddingBottom:"4px",
   
  },
  textCoverBox3: {
    // height:"20px",
    // width:"40px",
    border:"1px solid red",
    flexShrink:"",
    // fle

  },
  noProducts:{
    // paddingTop:"4px",
    // paddingBottom:"4px",
  //  width:"20px",
  //  height:"20px"
  },
  // company:{width:"45px",paddingLeft:"3px"},
  span3:{
   fontSize:"9px",
   border:"1px solid red",
   
  },
content:{
    marginTop: "10px",
    backgroundColor: "lightblue",
    padding:"10px"
},
  container: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    
  },
  itemContainer: {
    width: 90,
    paddingBottom:"10px",
    // border:"1px solid red",
    marginTop:"3px"
  },
  itemMargin:{
    //    marginLeft:"10px",
  },
  box: {
    width: 85,
    height: 85,
    backgroundColor: "yellow",
    marginTop:"10px"
  },
  textContainer: {
    marginTop: "4px",
  },
  text: {
    fontSize: "9px",
    color: "black",
    fontWeight: "bold",
    //   lineHeight: 4,
  },
  headingText:{
fontSize:"12px",
color: "black",
fontWeight: "bold",
  },
  image:{
    width:"100%",
    height:"100%"
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page   wrap size="A4"  style={styles.page}>
      <View  style={styles.table}>
        <View style={[styles.tableRow]}>
          <View style={styles.tableRowCol}>
            <View style={styles.tableHeaderCell}>
              <Text style={styles.headerText}>Invoice</Text>
            </View>
            <View style={styles.tableDataCell}>
              <View style={[styles.textCoverBox3]}>
                <Text style={styles.span3}>ORD-002</Text>
              </View>
            </View>
          </View>
          <View style={styles.tableRowCol}>
            <View style={styles.tableHeaderCell}>
              <Text style={styles.headerText}>Ordered By</Text>
            </View>
            <View style={styles.tableDataCell}>
              <View style={[styles.textCoverBox3,styles.textCoverBox]}>
                <Text style={styles.span3}>Jones</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.tableHeaderCell}>
              <Text style={styles.headerText}>Company</Text>
            </View>
            <View style={styles.tableDataCell}>
              <Text style={[styles.textCoverBox,styles.company]}>
                <Text style={styles.span}>Adidas</Text>
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.tableHeaderCell}>
              <Text style={styles.headerText}>Nr. of Products</Text>
            </View>
            <View style={styles.tableDataCell}>
              <Text style={[styles.noProducts,styles.textCoverBox]}>
                <Text style={styles.span}>10</Text>
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.tableHeaderCell}>
              <Text style={styles.headerText}>Bill</Text>
            </View>
            <View style={styles.tableDataCell}>
              <Text style={styles.textCoverBox}>
                <Text style={styles.span}>3,00 $</Text>
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.tableHeaderCell}>
              <Text style={styles.headerText}>Created at</Text>
            </View>
            <View style={styles.tableDataCell}>
              <Text style={styles.textCoverBox}>
                <Text style={styles.span}>Jan 27, 2024, 11:13 PM</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
   {[5,7,10,11,12,17].map((val,i)=>{
    const array1 = new Array(val);
    array1.fill(42);
    return(
    <View key={val}  style={styles.content}>
    <View ><Text style={styles.headingText}>Employee : Jon</Text></View>
      <View  style={styles.container}>

        {array1.map((val,i) => (
        <View  key={i} style={[styles.itemContainer,styles.itemMargin]}>
            <View break style={styles.box}>
              <Image style={styles.image} src="https://res.cloudinary.com/dtiffjbxv/image/upload/v1/stickimages/stick-products/shirt1_oimq39" />
              {/* {{ uri: , method: "GET", headers: { "Cache-Control": "no-cache" }, body: "" }}  */}
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.text}>product: Kite</Text>
              <Text style={styles.text}>price: 10$</Text>
              <Text style={styles.text}>size: M</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
   )})}
    </Page>
  </Document>
);

export default MyDocument;
