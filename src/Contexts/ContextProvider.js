import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  submitPetition: false,
};

export const ContextProvider = ({ children }) => {
  const [activeDataRejected, setActiveDataRejected] = useState(false);
  const [closeDataRejected, setCloseDataRejected] = useState(true);
  const [activeDataProcessing, setActiveDataProcessing] = useState(false);
  const [closeDataProcessing, setCloseDataProcessing] = useState(true);
  const [activeDataCompleted, setActiveDataCompleted] = useState(false);
  const [closeDataCompleted, setCloseDataCompleted] = useState(true);
  const [activeDataFollowSteps, setActiveDataFollowSteps] = useState(false);
  const [closeDataFollowSteps, setCloseDataFollowSteps] = useState(true);
  const [toogleNavLink, setToogleNavLink] = useState(false);
  const [tooglePetition, setTooglePetition] = useState(false);
  const [toogleSubmitFollowSteps, setToogleSubmitFollowSteps] = useState(false);

  const [isClicked, setIsClicked] = useState(initialState);
  // icons clicked
  const dataOpenClickedRejected = () => {
    if (activeDataRejected) {
      setActiveDataRejected(false);
      setCloseDataRejected(true);
      setToogleNavLink(false);
    } else {
      setActiveDataProcessing(false);
      setActiveDataCompleted(false);
      setActiveDataFollowSteps(false);
      setActiveDataRejected(true);
      setCloseDataRejected(false);
      setToogleNavLink(true);
    }
  };

  const dataOpenClickedProcessing = () => {
    if (activeDataProcessing) {
      setActiveDataProcessing(false);
      setCloseDataProcessing(true);
      setToogleNavLink(false);
    } else {
      setActiveDataRejected(false);
      setActiveDataCompleted(false);
      setActiveDataFollowSteps(false);
      setActiveDataProcessing(true);
      setCloseDataProcessing(false);
      setToogleNavLink(true);
    }
  };

  const dataOpenClickedCompleted = () => {
    if (activeDataCompleted) {
      setActiveDataCompleted(false);
      setCloseDataCompleted(true);
      setToogleNavLink(false);
    } else {
      setActiveDataProcessing(false);
      setActiveDataRejected(false);
      setActiveDataFollowSteps(false);
      setActiveDataCompleted(true);
      setCloseDataCompleted(false);
      setToogleNavLink(true);
    }
  };

  const dataOpenClickedFollowSteps = () => {
    if (activeDataFollowSteps) {
      setActiveDataFollowSteps(false);
      setCloseDataFollowSteps(true);
      setToogleNavLink(false);
    } else {
      setActiveDataProcessing(false);
      setActiveDataCompleted(false);
      setActiveDataRejected(false);
      setActiveDataFollowSteps(true);
      setCloseDataFollowSteps(false);
      setToogleNavLink(true);
    }
  };

  const handletooglePetition = () => {
    if (tooglePetition) {
      setTooglePetition(false);
    } else {
      setTooglePetition(true);
    }
  };

  const handleToogleSubmitFollowSteps = () => {
    if (toogleSubmitFollowSteps) {
      setToogleSubmitFollowSteps(false);
    } else {
      setToogleSubmitFollowSteps(true);
    }
  };

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeDataRejected,
        setActiveDataRejected,
        closeDataRejected,
        setCloseDataRejected,
        dataOpenClickedRejected,

        activeDataProcessing,
        setActiveDataProcessing,
        closeDataProcessing,
        setCloseDataProcessing,
        dataOpenClickedProcessing,

        activeDataCompleted,
        setActiveDataCompleted,
        closeDataCompleted,
        setCloseDataCompleted,
        dataOpenClickedCompleted,

        activeDataFollowSteps,
        setActiveDataFollowSteps,
        closeDataFollowSteps,
        setCloseDataFollowSteps,
        dataOpenClickedFollowSteps,

        toogleNavLink,

        handletooglePetition,
        tooglePetition,

        toogleSubmitFollowSteps,
        handleToogleSubmitFollowSteps,

        isClicked,
        handleClick,
        initialState,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
