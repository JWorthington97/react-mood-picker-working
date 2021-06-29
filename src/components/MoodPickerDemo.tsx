import { useState } from "react";

function MoodPickerDemo(): JSX.Element {
  const [moodValueFromCurrentRender, queueRerenderWithNewMoodValue] =
    useState("confused");

  const handleMoodChangeToHappy = () => queueRerenderWithNewMoodValue('happy');

  const handleMoodChangeToConfused = () => queueRerenderWithNewMoodValue('confused');

  const handleMoodChangeToSad = () => queueRerenderWithNewMoodValue('sad');

  console.log(
    "Component is rendering with a mood value of",
    moodValueFromCurrentRender
  );

  return (
    <>
      <h1>Mood Picker Demo</h1>
      <p>Chosen mood: {moodValueFromCurrentRender.toUpperCase()}</p>
      <button onClick={handleMoodChangeToHappy}>😀</button>
      <button onClick={handleMoodChangeToConfused}>🤔</button>
      <button onClick={handleMoodChangeToSad}>😢</button>
      <button onClick={() => queueRerenderWithNewMoodValue('excited')}>🤩</button> 
      <button onClick={() => queueRerenderWithNewMoodValue('sleepy')}>💤</button>
      {/* last 2 are anonymous arrow functions */}
    </>
  );
}

export default MoodPickerDemo;
