import { View, Text } from "react-native"
import styles from "./styles"

export default ({ content }) => {
    return (
        <View style={styles.Container}>
            <Text style={styles.Title}>{content}</Text>
        </View>
    )
}
