import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar, View, Text, StyleSheet, ScrollView } from 'react-native'
import { PrimaryButton } from '../../components/Button'
import { useNavigation } from 'react-navigation-hooks'
import {
  COLORS,
  FONT_FAMILY,
  FONT_SIZES,
  FONT_BOLD,
  FONT_MED,
} from '../../styles'
import { normalize, Button } from 'react-native-elements'
import { FormHeader } from '../../components/Form/FormHeader'
import { getAgreementText } from '../const'
import { applicationState } from '../../state/app-state'

import I18n from '../../../i18n/i18n'

export const AgreementPolicy = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'white'} barStyle="light-content" />
      <FormHeader>
        <View style={styles.header}>
          <Text style={styles.title}>{I18n.t('term_and_conditions')}</Text>
          <Text style={styles.subtitle}>{I18n.t('before_usage')}</Text>
          <Text style={styles.subtitle}>{I18n.t('please_accept_terms')}</Text>
        </View>
      </FormHeader>
      <View style={styles.content}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingVertical: 16,
          }}
        >
          <View style={{ paddingHorizontal: 24 }}>
            <Text style={styles.agreement}>{getAgreementText()} </Text>
          </View>
        </ScrollView>
      </View>
      {/* <CheckBox
        title="ฉันยอมรับ{I18n.t('term_and_conditions')}"
        containerStyle={{
          backgroundColor: 'transparent',
          borderWidth: 0,
          marginBottom: 16,
        }}
        checked={agree}
        onPress={() => setAgree(!agree)}
        checkedColor={COLORS.BLUE}
        textStyle={{ color: COLORS.BLACK_1, fontSize: FONT_SIZES[600], fontWeight:'normal'}}
        fontFamily={FONT_BOLD}
      /> */}
      <View style={styles.footer}>
        <PrimaryButton
          // disabled={!agree}
          title={I18n.t('accept')}
          style={{ width: '100%' }}
          containerStyle={{ width: '100%', marginTop: normalize(16) }}
          onPress={() => {
            applicationState.setData('skipRegistration', true)
            navigation.navigate('Onboarding')
          }}
        />
        <Button
          type="outline"
          title={I18n.t('deny')}
          style={{ width: '100%' }}
          titleStyle={{
            fontFamily: FONT_MED,
            fontSize: FONT_SIZES[600],
            lineHeight: 30,
          }}
          containerStyle={{ width: '100%', marginTop: 8 }}
          onPress={() => {
            navigation.pop()
          }}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: {
    alignItems: 'flex-start',
    marginBottom: 16,
    marginHorizontal: 24,
  },

  title: {
    fontFamily: FONT_BOLD,
    fontSize: FONT_SIZES[700],
    alignItems: 'center',
    color: COLORS.BLACK_1,
    textAlign: 'center',
  },

  subtitle: {
    fontFamily: FONT_FAMILY,
    fontSize: FONT_SIZES[500],
    lineHeight: 24,
    alignItems: 'center',
    color: COLORS.SECONDARY_DIM,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.LIGHT_BLUE,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.BORDER_LIGHT_BLUE,
  },
  agreement: {
    fontSize: FONT_SIZES[400],
    lineHeight: 24,
    color: COLORS.GRAY_4,
    marginBottom: 16,
  },
  footer: {
    alignItems: 'center',
    paddingHorizontal: normalize(20),
    marginBottom: 8,
  },
})
