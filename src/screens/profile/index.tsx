import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

const Profile: React.FC = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ fontSize: 30 }}> Profile </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
})

export default Profile
