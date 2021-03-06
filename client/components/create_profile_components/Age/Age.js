import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import styles from "../styles";

const marginLeftText = "5%";
const marginBottomText = 10;
const errorText = "Podaj wiek";

function Age({
  handleYearsChange,
  handleMonthsChange,
  years,
  months,
  errorTrue,
  createProfileError,
}) {
  return (
    <View>
      <View style={styles.standardHeader}>
        <Text
          style={[
            { marginLeft: marginLeftText, marginBottom: marginBottomText },
            styles.headerTitle,
          ]}
        >
          Wiek
        </Text>
      </View>

      <View style={{ flexDirection: "row", alignContent: "space-around" }}>
        <TextInput
          placeholderTextColor="#000"
          placeholderStyle={{}}
          style={[
            styles.textInputSmall,
            createProfileError.emptyAge ? styles.inputError : null,
          ]}
          autoCapitalize="none"
          value={years}
          onChangeText={(val) => handleYearsChange(val)}
        />
        <Text style={[styles.textInputName]}>lat</Text>

        <TextInput
          placeholderTextColor="#000"
          placeholderStyle={{}}
          style={[
            styles.textInputSmall,
            createProfileError.emptyAge ? styles.inputError : null,
          ]}
          autoCapitalize="none"
          value={months}
          onChangeText={(val) => handleMonthsChange(val)}
        />
        <Text style={[styles.textInputName]}>mies</Text>
      </View>
      {createProfileError.emptyAge && (
        <Text style={[styles.error]}>{errorTrue}</Text>
      )}
    </View>
  );
}

export default Age;
