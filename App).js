import React from 'react';
import { FlatList, ActivityIndicator, Text, View,Alert  } from 'react-native';




export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    const data = {
      optPost: 'myAPI',
      message: 'We make a research of fetch'
      };
    const endpoint = 'http://nhom88.com/ds/door';

    fetch(endpoint, {
      method: 'GET', headers: { "Access-Control-Allow-Origin": "*", }      
    })
    .then((resp) => resp.json())
    .then(function(response) {
      
      console.info('fetch()', response);
      return response;
    })
    .catch((error) =>{
      console.error(error);
    });

    console.log("sao the nhi");
    //return fetch('https://www.googleapis.com/blogger/v3/blogs/6041987638358622721/posts?key=AIzaSyCP4co0djhII1KUifQaVuiKCgFXyP0jfNM')
    return fetch('http://nhom88.com/ds/door'
    ,{ method: 'GET',headers: {        
      "Access-Control-Allow-Origin": "*"      
    } })
    
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson) 
        Alert.alert("The film at 2nd:  " + responseJson.data.docs[1].name);
        this.setState({
          isLoading: false,  
          //dataSource: responseJson.items,
          dataSource: responseJson.data.docs,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:10}}>
        <FlatList
          data={this.state.dataSource}
          //renderItem={({item}) => <Text>{item.title}, {item.author.displayName}</Text>}
          renderItem={({item}) => <Text>{item.name}, {item.imagePath}</Text>}
          keyExtractor={({_id}, index) => _id}
        />
      </View>
    );
  }
}