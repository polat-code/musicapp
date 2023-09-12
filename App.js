import React, { useState } from 'react';
import {View, StyleSheet, SafeAreaView, Text, FlatList} from 'react-native';
import music_data from "./musicData.json";
import SongCard from './src/components/SongCard';
import SearchBar from './src/components/SearchBar';

const App = () => {
  const [data, setData] = useState(music_data);

  const renderSong = ({item}) => <SongCard song={item}/>
  const renderSeperator = () => <View style={styles.separator}></View> 

  const handleSearch = (searchedText) => {
    if(searchedText === "") {
      setData(music_data);
      return;
    }
    
    const filteredData = music_data.filter((song) => {
      const lowSearchedText = searchedText.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      
      return currentTitle.includes(lowSearchedText);
    })
    setData(filteredData);
  };

  return (
    <SafeAreaView style={styles.container}>
        <SearchBar onSearch={handleSearch}/>
        <FlatList
          keyExtractor={item => item.id}
          data={data}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeperator}
        
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  separator:{
    borderWidth:1,
    borderColor:'#e0e0e0'
  },
})

export default App;
