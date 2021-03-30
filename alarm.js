import React from "react";
import { Switch } from "antd";


export default function DisplayAlarms(props) {
 const {alarmState} = props;
 const alarms = [
    {
      id: 1,
      name: "Alarm 1",
      togggle: <Switch checked={alarmState}/>,
    },
    {
      id: 2,
      name: "Alarm 2",
      togggle: <Switch checked={alarmState}/>,
    },
    {
      id: 3,
      name: "Alarm 3",
      togggle: <Switch checked={alarmState}/>,
    },
    {
      id: 4,
      name: "Alarm 4",
      togggle: <Switch checked={alarmState}/>,
    },
    {
      id: 5,
      name: "Alarm 5",
      togggle: <Switch checked={alarmState}/>,
    },
    {
      id: 6,
      name: "Alarm 6",
      togggle: <Switch checked={alarmState}/>,
    },
  ];
  
  return (
    <div>
    {alarms.map(alarm => (
     {alarm.togggle}
    ))}
    </div>
  );
  
}
