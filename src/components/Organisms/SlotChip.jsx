import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SIZE } from "../../theme/fonts";
import { SafeAreaView } from "react-native-safe-area-context";

const SlotChip = () => {
  const [timeRange, setTimeRange] = useState({ start: "5:00", end: "7:00" });
  const [timeSlots, setTimeSlots] = useState([{ slot: "", isOccupied: null }]);

  const generateTimeIntervals = (startTime, endTime) => {
    const intervals = [];
    let [startHours, startMinutes] = startTime.split(":").map(Number);
    let [endHours, endMinutes] = endTime.split(":").map(Number);

    let start = new Date();
    start.setHours(startHours, startMinutes, 0, 0);

    let end = new Date();
    end.setHours(endHours, endMinutes, 0, 0);

    // If end time is earlier than start time, add 24 hours to end time
    if (end <= start) {
      end.setDate(end.getDate() + 1);
    }

    while (start < end) {
      const intervalEnd = new Date(start.getTime() + 30 * 60000); // Add 30 minutes
      intervals.push({
        start: start.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        end: intervalEnd.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      });
      start = intervalEnd;
    }

    return intervals;
  };

  const handleGenerateSlots = () => {
    const slots = generateTimeIntervals(timeRange.start, timeRange.end);
    const updatedSlots = slots.map((slot) => ({
      ...slot,
      isOccupied: Math.random() < 0.5,
    }));
    setTimeSlots(updatedSlots);
  };

  useEffect(() => {
    handleGenerateSlots();
  }, [timeRange]);

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.slotContainer}>
          {timeSlots.map((slot, index) => (
            <TouchableOpacity
              activeOpacity={0.7}
              key={index}
              style={[
                styles.slot,
                {
                  backgroundColor: slot.isOccupied
                    ? "rgba(117,117,117,0.1)"
                    : "rgba(42,144,131,0.1)",
                },
              ]}
            >
              <Text
                style={[
                  styles.slotText,
                  { color: slot.isOccupied ? "#757575" : "#2A9083" },
                ]}
              >{`${slot.start} - ${slot.end}`}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SlotChip;

const styles = StyleSheet.create({
  title: {
    fontFamily: "quicksand-semibold",
    fontSize: SIZE.size_20,
  },
  slotContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginHorizontal: 10,
    width: "100%",
    alignItems: "center",
  },
  slot: {
    width: "30%",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  slotText: {
    fontSize: SIZE.size_14,
    fontFamily: "quicksand-medium",
  },
});
