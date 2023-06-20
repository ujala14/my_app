import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import { Text as Ptext, TextInput  } from 'react-native-paper';

const ujala= () => {
return (
<ScrollView  style={{marginTop:100}}>
<View>
<Ptext style ={{ textAlign:"center", fontWeight:"bold", fontSize: 20}}>KIA SPORTAGE</Ptext>
<Image
source={{
uri: 'https://cache1.pakwheels.com/ad_pictures/8309/tn_kia-sportage-2005-83097919.webp',
}}
style={{ width: 400, height: 200, borderRadius:100, borderColor: "#ff5", borderWidth: 5 }}
/>
</View>
<TextInput
      label="tell about the car"
      secureTextEntry
      right={<TextInput.Icon icon="eye" />}
    />

</ScrollView>
);
}


export default ujala;
