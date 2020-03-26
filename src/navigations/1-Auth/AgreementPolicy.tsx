import React, { useState } from 'react'
import { MyBackground } from '../../components/MyBackground'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native'
import { PrimaryButton } from '../../components/Button'
import { useNavigation } from 'react-navigation-hooks'
import { COLORS, FONT_FAMILY } from '../../styles'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Entypo'
import { CheckBox } from 'react-native-elements'

export const AgreementPolicy = () => {
  const navigation = useNavigation()
  const [agree, setAgree] = useState(false)
  return (
    <MyBackground>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={{ padding: 16 }}>
          <TouchableWithoutFeedback onPress={() => navigation.pop()}>
            <Icon
              name="chevron-thin-left"
              size={24}
              color={COLORS.PRIMARY_LIGHT}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.header}>
          <Text style={styles.title}>ข้อตกลงและเงื่อนไข</Text>
          <Text style={styles.subtitle}>ในการใช้บริการ</Text>
        </View>
        <View style={styles.content}>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, backgroundColor: 'white' }}
          >
            <View style={{ flexDirection: 'column', padding: 16 }}>
              <Text style={styles.agreement}>
                1. การใช้ Application นี้เป็นการใช้เพื่อการติดตาม
                และควบคุมการระบาดของเชื้อไวรัส Covid-19
              </Text>
              <Text style={styles.agreement}>
                2. ข้อมูลส่วนบุคคลจะถูกจัดเก็บ รวบรวมใช้ และประมวลผล
                เพื่อจุดประสงค์ในการป้องกันการระบาดของโรค
                และจะถูกทำลายทิ้งหลังจากสถานการณ์คลี่คลาย
              </Text>
              <Text style={styles.agreement}>
                3. Application ขอเข้าถึง Location ของเครื่องมือถือ
                และให้ระบบทำการส่งข้อมูลมายังส่วนกลางอย่างต่อเนื่อง
              </Text>
              <Text style={styles.agreement}>
                4. ข้อมูลส่วนบุคคล หลังจากการข้อมูลส่วนบุคคลแล้ว
                จะถูกนำไปใช้เพื่อศึกษาวิเคราะห์ในการใช้เพื่อป้องกันโรคระบาดที่อาจจะเกิดขึ้นในอนาคต
              </Text>
            </View>
          </ScrollView>
        </View>
        <CheckBox
          title="ฉันยอมรับข้อตกลงและเงื่อนไข"
          containerStyle={{
            backgroundColor: 'transparent',
            borderWidth: 0,
            marginBottom: 16,
          }}
          checked={agree}
          onPress={() => setAgree(!agree)}
          checkedColor={COLORS.ORANGE}
          textStyle={{ color: COLORS.PRIMARY_LIGHT, fontSize: 16 }}
        />
        <View style={styles.footer}>
          <PrimaryButton
            disabled={!agree}
            title={'ถัดไป'}
            onPress={() => {
              navigation.navigate('AuthPhone')
            }}
          />
        </View>
      </SafeAreaView>
    </MyBackground>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },

  title: {
    fontFamily: FONT_FAMILY,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 40,
    alignItems: 'center',
    color: COLORS.PRIMARY_LIGHT,
    textAlign: 'center',
  },

  subtitle: {
    fontFamily: FONT_FAMILY,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
    alignItems: 'center',
    color: COLORS.GRAY_2,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  agreement: {
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.PRIMARY_DARK,
  },
  footer: {
    alignItems: 'center',
    marginBottom: 16,
  },
})