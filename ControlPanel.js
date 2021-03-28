import React, { useState } from "react";
import { alarms } from "./alarm";
import { IoIosAperture } from "react-icons/io";
import { Switch } from "antd";

function ControlPanel() {
  const [isalarms, setisAlarms] = useState(alarms);
  const [toggle, setToggle] = useState(false);
  const [masterToggle, setMasterToggle] = useState(false);
  const masterToggler = () => {
    masterToggle ? setMasterToggle(false) : masterToggle(true);
  };

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };
  return (
    <div className="controlpanel">
      <div className="alarm-toggles ">
        <div>
          <h4 className="master-control">
            Master Control <Switch className="float-right pl-5" />
          </h4>
        </div>
        {isalarms.map((isalarm) => {
          const { id, name, togggle } = isalarm;
          return (
            <article key={id}>
              <h4 className="alarm-name">
                <IoIosAperture />
                <span>{name}</span>
                <span className="toggle" onClick={toggler}>
                  {togggle}
                </span>
              </h4>
            </article>
          );
        })}
      </div>
      <div className="alarm-devices">Alarm Devices</div>
    </div>
  );
}

export default ControlPanel;
