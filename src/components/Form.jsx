import "../assets/styles/form.css";
import { useState } from "react";

const Form = () => {
  const stepDescription = {
    1: [
      "Personal info",
      "Please provide your name, email address, and phone number.",
    ],
    2: [
      "Select your plan",
      "You have the option of monthly or yearly billing.",
    ],
    3: ["Pick add-ons", "Add-ons help enhance your gaming experience."],
    4: ["Finishing up", "Double-check everything looks OK before confirming."],
  };
  const [actualStep, setActualStep] = useState(1);

  return (
    <div className="form-container">
      <div className="form-side-bar">
        <div>
          <button
            onClick={() => {
              setActualStep(1);
            }}
          >
            1
          </button>
          <p>
            <span>Step 1</span> Your info
          </p>
        </div>
        <div>
          <button
            onClick={() => {
              setActualStep(2);
            }}
          >
            2
          </button>
          <p>
            <span>Step 2</span> Select Plan
          </p>
        </div>
        <div>
          <button
            onClick={() => {
              setActualStep(3);
            }}
          >
            3
          </button>
          <p>
            <span>Step 3</span> Add-Ons
          </p>
        </div>
        <div>
          <button
            onClick={() => {
              setActualStep(4);
            }}
          >
            4
          </button>
          <p>
            <span>Step 4</span> Summary
          </p>
        </div>
      </div>
      <div className="form-main-container">
        <p>
          <span>{stepDescription[actualStep]?.[0]}</span>
          {stepDescription[actualStep]?.[1]}
        </p>

        {actualStep === 1 && (
          <div className="form-your-info">
            <label>
              Name
              <input
                type="text"
                placeholder="e.g. Stephen King"
                required
              ></input>
            </label>
            <label>
              Email Addres
              <input
                type="email"
                placeholder="e.g. stephenking@lorem.com"
                required
              ></input>
            </label>
            <label>
              Phone Number
              <input
                type="tel"
                placeholder="e.g. +1 234 567 890"
                required
              ></input>
            </label>
          </div>
        )}

        {actualStep === 2 && (
          <div className="form-select-plan">
            Arcade $9/mo Advanced $12/mo Pro $15/mo Monthly Yearly
          </div>
        )}

        {actualStep === 3 && (
          <div className="form-add-ons">
            Online service Access to multiplayer games +$1/mo Larger storage
            Extra 1TB of cloud save +$2/mo Customizable Profile Custom theme on
            your profile +$2/mo Go Back Next Step
          </div>
        )}

        {actualStep === 4 && (
          <div className="form-summary">Total (per month/year)</div>
        )}

        {actualStep === 5 && (
          <div className="form-summary">
            Thank you! Thanks for confirming your subscription! We hope you have
            fun using our platform. If you ever need support, please feel free
            to email us at support@loremgaming.com.
          </div>
        )}

        <div className="navigation-buttons">
          <button onClick={() => setActualStep((oldVal) => oldVal - 1)}>
            Go Back
          </button>
          <button onClick={() => setActualStep((oldVal) => oldVal + 1)}>
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
