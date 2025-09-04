import { Text, TouchableOpacity, View } from "react-native";
import { Calendar, DateData } from "react-native-calendars";

interface CustomCalendarProps {
    onDayPress?: (dateString: DateData) => void;
    daySelected: DateData | undefined;
}

export function CustomCalendar({ onDayPress, daySelected }: CustomCalendarProps) {
    
    return (
        <Calendar
            onDayPress={onDayPress}
            markedDates={{
                [daySelected?.dateString || ""]: { selected: true }
            }}
            theme={{
                calendarBackground: 'transparent',
                fontFamily: 'Inter',
                todayTextColor: '#FFC9E9',
                selectedDayTextColor: '#262135',
                selectedDayBackgroundColor: '#FFC9E9',
                textDayStyle: { color: "#FFFFFF78", },
                'stylesheet.calendar.header': {
                    headerContainer: {
                        display: 'none',
                    },
                }
            }}
            hideExtraDays
            hideArrows
            enableSwipeMonths
        />
    )
}