import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/authStyles";
export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.title}>Hello</Text>
      <TouchableOpacity
      style={{
        backgroundColor: "black",
        borderRadius: 5,
        padding: 10,
        marginVertical: 20
      }}
      onPress={() => {alert("You touched it!")}}>
      <Text style={{color: "white"}}>Press Me</Text>
      </TouchableOpacity>
      <Link href={'/notifications'} >Visit notifications</Link>

    </View>
  );
}



