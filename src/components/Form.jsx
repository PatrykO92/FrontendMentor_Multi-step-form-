import "../assets/styles/form.css";
import LoadingSpinner from "./LoadingSpinner";

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

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "Arcade",
    addons: {
      onlineService: false,
      largerStorage: false,
      customizableProfile: false,
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [actualStep, setActualStep] = useState(1);
  const [monthlyPayment, setMonthlyPayment] = useState(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    //added handling for checkbox/addons
    if (event.target.type === "checkbox") {
      setForm((prevForm) => ({
        ...prevForm,
        addons: { ...prevForm.addons, [name]: !form.addons.name },
      }));
    } else {
      setForm((prevForm) => ({ ...prevForm, [name]: value }));
    }
  };

  return (
    <div className="form-container">
      <div className="form-side-bar">
        <button onClick={() => console.log(form)}>test button</button>
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

      {isLoading ? (
        <div className="form-main-container">
          <LoadingSpinner />
        </div>
      ) : (
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
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="e.g. Stephen King"
                  required
                ></input>
              </label>
              <label>
                Email Addres
                <input
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  type="email"
                  placeholder="e.g. stephenking@lorem.com"
                  required
                ></input>
              </label>
              <label>
                Phone Number
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleInputChange}
                  type="tel"
                  placeholder="e.g. +1 234 567 890"
                  required
                ></input>
              </label>
            </div>
          )}

          {actualStep === 2 && (
            <div className="form-select-plan">
              <div>
                <div>
                  <input
                    type="radio"
                    id="plan-1"
                    name="plan"
                    value="Arcade"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="plan-1">
                    Arcade
                    {monthlyPayment ? (
                      <p>
                        <span>$9/mo</span>
                      </p>
                    ) : (
                      <p>
                        <span>$90/yr</span>2 months free
                      </p>
                    )}
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="plan-2"
                    name="plan"
                    value="Advanced"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="plan-2">
                    Advanced
                    {monthlyPayment ? (
                      <p>
                        <span>$12/mo</span>
                      </p>
                    ) : (
                      <p>
                        <span>$120/yr</span>2 months free
                      </p>
                    )}
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="plan-3"
                    name="plan"
                    value="Pro"
                    onChange={handleInputChange}
                  />
                  <label htmlFor="plan-3">
                    Pro
                    {monthlyPayment ? (
                      <p>
                        <span>$15/mo</span>
                      </p>
                    ) : (
                      <p>
                        <span>$150/yr</span>2 months free
                      </p>
                    )}
                  </label>
                </div>
              </div>

              <div>
                <label>
                  Monthly
                  <input
                    type="checkbox"
                    onChange={() => {
                      setMonthlyPayment(!monthlyPayment);
                      console.log(monthlyPayment);
                    }}
                  />
                  Yearly
                </label>
              </div>
            </div>
          )}

          {actualStep === 3 && (
            <div className="form-add-ons">
              <div>
                <input
                  type="checkbox"
                  id="online-services"
                  name="onlineService"
                  value="Online service"
                  onChange={handleInputChange}
                />
                <label htmlFor="online-services">
                  <div>
                    <p>
                      <b>Online service</b>Access to multiplayer games
                    </p>
                    <p>{monthlyPayment ? "+$1/mo" : "+$10/yr"}</p>
                  </div>
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="larger-storage"
                  name="largerStorage"
                  value="Larger storage"
                  onChange={handleInputChange}
                />
                <label htmlFor="larger-storage">
                  <div>
                    <p>
                      <b>Larger storage</b>Extra 1TB of cloud save
                    </p>
                    <p>{monthlyPayment ? "+$2/mo" : "+$20/yr"}</p>
                  </div>
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="custom-profile"
                  name="customizableProfile"
                  value="Customizable profile"
                  onChange={handleInputChange}
                />
                <label htmlFor="custom-profile">
                  <div>
                    <p>
                      <b>Customizable Profile</b>Custom theme on your profile
                    </p>
                    <p>{monthlyPayment ? "+$2/mo" : "+$20/yr"}</p>
                  </div>
                </label>
              </div>
            </div>
          )}

          {actualStep === 4 && (
            <div className="form-summary">Total (per month/year)</div>
          )}

          {actualStep === 5 && (
            <div className="form-success">
              Thank you! Thanks for confirming your subscription! We hope you
              have fun using our platform. If you ever need support, please feel
              free to email us at support@loremgaming.com.
            </div>
          )}

          <div className="form-navigation-buttons">
            {actualStep === 1 ? (
              <div></div>
            ) : (
              <button onClick={() => setActualStep((oldVal) => oldVal - 1)}>
                Go Back
              </button>
            )}

            {actualStep === 4 ? (
              <button onClick={() => console.log("Confirmation sent")}>
                Confirm
              </button>
            ) : (
              <button onClick={() => setActualStep((oldVal) => oldVal + 1)}>
                Next Step
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
