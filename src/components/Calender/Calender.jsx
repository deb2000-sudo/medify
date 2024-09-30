import Dayselector from "./DaySelector/Dayselector";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { startOfDay } from "date-fns";
import Timeslotpicker from "./TimeSlotPicker/Timeslotpicker";
const Calender=({ availableSlots, details, handleBooking })=>{
    const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));

    const totalSlots =
      availableSlots.morning.length +
      availableSlots.afternoon.length +
      availableSlots.evening.length;
  
    return (
      <Box>
        <Dayselector
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          totalSlots={totalSlots}
        />
        <Timeslotpicker
          availableSlots={availableSlots}
          selectedDate={selectedDate}
          details={details}
          handleBooking={handleBooking}
        />
      </Box>
    );
}

export default Calender;