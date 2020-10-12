import React, { useState } from 'react';
import { Container, Header, Content, DatePicker, Text } from 'native-base';


const PickerDate = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = { chosenDate: new Date() };
  //   this.setDate = this.setDate.bind(this);
  // }
  // setDate(newDate) {
  //   this.setState({ chosenDate: newDate });
  // }
  const [date, setDate] = useState("");

  return (
    <Container>
      <Header />
      <Content>
        <DatePicker
          defaultDate={new Date(2018, 4, 4)}
          minimumDate={new Date(2018, 1, 1)}
          maximumDate={new Date(2018, 12, 31)}
          locale={"en"}
          timeZoneOffsetInMinutes={undefined}
          modalTransparent={false}
          animationType={"fade"} //fade, slide, none
          androidMode={"spinner"} //spinner, default
          placeHolderText="Select date"
          textStyle={{ color: "green" }}
          placeHolderTextStyle={{ color: "black" }}
          onDateChange={date => setDate(date)}
          disabled={false}
        />
        <Text>
          Date: {date.toString().substr(4, 12)}
        </Text>
      </Content>
    </Container>
  );
};

export default PickerDate;