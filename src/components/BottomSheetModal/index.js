import { BottomSheetModalProvider, BottomSheetModal} from '@gorhom/bottom-sheet'
import { SafeAreaView, Text, StyleSheet } from 'react-native'

const bottom = () => {
    return (
        <BottomSheetModalProvider>
            <SafeAreaView>
                <Text>Hello</Text>
            </SafeAreaView>
        </BottomSheetModalProvider>
    )
}