import { Text, View } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';

import styles from './styles';

// export default function Login({ navigation }) {
export default function Login() {
    return (
        <View style={styles.logoContainer}>
            {/* <MaterialIcons name="fastfood" size={48} color="#7F0000" /> */}
            <Text style={styles.logoText}>BomBuguer</Text>
        </View>
    );
}