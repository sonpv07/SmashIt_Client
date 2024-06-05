import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SIZE } from "../../theme/fonts";
import { TextInput } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import InputIcon from "./InputIcon";
import InputNumber from "./InputNumber";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import SelectField from "./SelectField";
import InputImage from "./InputImage";

export default function InputField({
  inputType,
  valueType,
  primaryText,
  secondaryText,
  placeholderText,
  noteText,
  primaryTextColor,
  secondaryTextColor,
  backgroundColor,
  iconBackgroundColor,
  iconFamily,
  iconName,
  iconSize,
  iconColor,
  iconText,
  action,
  inputData,
  setInputData,
}) {
  // const [input, setInput] = useState("as");

  const [isOpenDatePicker, setIsOpenDatePicker] = useState(false);

  const [tempTime, setTempTime] = useState(new Date());

  const handlePickTime = (value) => {
    setIsOpenDatePicker(false);

    if (value.type === "set") {
      const date = new Date(value.nativeEvent.timestamp);

      setTempTime(date);

      const options = {
        timeZone: "Asia/Ho_Chi_Minh",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      const formattedDate = date.toLocaleString("en-US", options);

      setInputData(formattedDate);
    }
  };

  return (
    <View>
      <Text style={styles.primaryText}>
        {primaryText}{" "}
        {secondaryText ? (
          <Text style={styles.secondaryTextText}>({secondaryText})</Text>
        ) : (
          ""
        )}
      </Text>

      {inputType === "normal" && (
        <TextInput
          inputMode={valueType === "phone" && "numeric"}
          style={[styles.input, { fontSize: SIZE.size_16 }]}
          placeholder={placeholderText}
          placeholderTextColor={"#BCBCBC"}
          value={inputData}
          onChangeText={(value) => setInputData(value)}
        />
      )}

      {inputType === "image" && <InputImage />}

      {inputType === "number" && (
        <InputNumber
          iconFamily={"AntDesign"}
          iconName={"plus"}
          iconSize={20}
          placeholder={placeholderText}
          inputData={inputData}
          setInputData={setInputData}
        />
      )}

      {inputType === "icon" && (
        <InputIcon
          inputType={valueType}
          backgroundColor={iconBackgroundColor}
          iconFamily={iconFamily}
          iconName={iconName}
          iconSize={iconSize}
          iconColor={iconColor}
          placeholder={placeholderText}
          text={iconText}
          action={action}
          inputData={inputData}
          setInputData={setInputData}
        />
      )}

      {inputType === "dropdown" && (
        <SelectField
          iconFamily={"AntDesign"}
          iconName={"caretdown"}
          iconSize={18}
          placeholder={placeholderText}
          inputValue={inputData}
          setInputValue={setInputData}
        />
      )}

      {inputType === "datetime" && (
        <>
          <SelectField
            iconFamily={"AntDesign"}
            iconName={"caretdown"}
            iconSize={18}
            placeholder={"Giờ"}
            action={() => setIsOpenDatePicker(true)}
            inputValue={inputData}
          />

          {isOpenDatePicker && (
            <RNDateTimePicker
              value={tempTime}
              mode="time"
              display="spinner"
              is24Hour={true}
              style={{ width: "300" }}
              onChange={(value) => {
                handlePickTime(value);
              }}
            />
          )}
        </>
      )}
      {noteText && <Text style={styles.noteText}>{noteText}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderColor: "#D1D1D1",
    borderWidth: 1,
    borderRadius: 8,
    fontFamily: "quicksand-regular",
  },

  primaryText: {
    fontSize: SIZE.size_14,
    fontFamily: "quicksand-semibold",
    marginBottom: 7,
  },

  secondaryTextText: {
    fontSize: SIZE.size_14,
    fontFamily: "quicksand-semibold",
    color: "#A4A4A4",
  },

  noteText: {
    color: "#737373",
    fontFamily: "quicksand-semibold",
    fontSize: SIZE.size_12,
    marginTop: 8,
  },
});
