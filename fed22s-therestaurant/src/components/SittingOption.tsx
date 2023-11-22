import { useContext, useEffect, useState } from "react";
import { SittingButton } from "./styled/SittingButton";
import {
  BookingsContext,
  CurrentBookingContext,
} from "../contexts/BookingContext";

interface disableTimeProps {
  showOrHideTime: string;
  changeVisability: string;
}

export const SittingOption = ({
  showOrHideTime,
  changeVisability,
}: disableTimeProps) => {
  const { updateSeating } = useContext(CurrentBookingContext);
  const [toggleFirstVisability, setToggleFirstVisability] =
    useState("showSeating");
  const [toggleSecondVisability, setToggleSecondVisability] =
    useState("showSeating");

  const handleClickSitting = (e: React.MouseEvent, theSitting: string) => {
    e.preventDefault();
    updateSeating(theSitting);
  };

  useEffect(() => {
    if (showOrHideTime === "17-19") {
      setToggleFirstVisability(changeVisability);
      setToggleSecondVisability("showSeating");
    }
    if (showOrHideTime === "19-21") {
      setToggleSecondVisability(changeVisability);
      setToggleFirstVisability("showSeating");
    }

    if (showOrHideTime === "") {
      setToggleFirstVisability("showSeating");
      setToggleSecondVisability("showSeating");
      console.log("hejhej");
    }
  });

  return (
    <>
      {toggleFirstVisability !== "disableShowSeating" && (
        <SittingButton
          onClick={(e) => {
            handleClickSitting(e, "17-19");
          }}
          changeVisability={toggleFirstVisability}
        >
          17-19
        </SittingButton>
      )}
      {toggleSecondVisability !== "disableShowSeating" && (
        <SittingButton
          onClick={(e) => {
            handleClickSitting(e, "19-21");
          }}
          changeVisability={toggleSecondVisability}
        >
          19-21
        </SittingButton>
      )}
    </>
  );
};
