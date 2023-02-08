import {
    TextInput,
    Text,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    View
} from 'react-native'

import { useState } from 'react'
import styles from './styles'
import { Spacer } from '@components'

export const Profile = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <TouchableOpacity style={styles.ListItem}>
                    <View style={styles.ListItemContent}>
                        <Text style={styles.TextStyles}>Nick</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ListItem}>
                    <View style={styles.ListItemContent}>
                        <Text style={styles.TextStyles}>Nick</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ListItem}>
                    <View style={styles.ListItemContent}>
                        <Text style={styles.TextStyles}>Nick</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ListItem}>
                    <View style={styles.ListItemContent}>
                        <Text style={styles.TextStyles}>Nick</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ListItem}>
                    <View style={styles.ListItemContent}>
                        <Text style={styles.TextStyles}>Nick</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ListItem}>
                    <View style={styles.ListItemContent}>
                        <Text style={styles.TextStyles}>Nick</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ListItem}>
                    <View style={styles.ListItemContent}>
                        <Text style={styles.TextStyles}>Nick</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.ListItem}>
                    <View style={styles.ListItemContent}>
                        <Text style={styles.TextStyles}>Nick</Text>
                    </View>
                </TouchableOpacity>


            </ScrollView>
        </SafeAreaView>
    )
}