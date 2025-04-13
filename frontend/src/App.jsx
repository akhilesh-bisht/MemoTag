import React, { useState } from "react";
import "./App.css";

const webDevTopics = [
  {
    category: "Foundations",
    topics: {
      easy: [
        "HTML",
        "CSS",
        "Bash basics (cd, ls, pwd, mkdir, touch, vi)",
        "Git/Github",
        "JS Intro, Single-threaded nature of JS",
        "Common JS APIs (map, filter, reduce, Object.keys)",
      ],
      medium: [
        "Bash medium (grep, piping, reverse search)",
        "Async JS, callback queue, event loop",
      ],
      hard: ["Creating promises, Common Promise API methods"],
    },
  },
  {
    category: "Simple frontend, DOM",
    topics: {
      easy: [
        "Intro to DOM, DOM Tree Structure",
        "Common DOM APIs",
        "Event handlers, onClick, stopPropagation",
        "localStorage",
      ],
      medium: ["DOM Manipulation, Dynamic frontends"],
      hard: ["Creating a simple reconciler, Foundation for React"],
    },
  },
  // Add more categories here
];

const TopicSelector = () => {
  const [selectedTopics, setSelectedTopics] = useState({});

  const handleCheckboxChange = (category, level, topic) => {
    setSelectedTopics((prevState) => {
      const newState = { ...prevState };
      if (!newState[category])
        newState[category] = { easy: [], medium: [], hard: [] };

      const topicIndex = newState[category][level].indexOf(topic);
      if (topicIndex === -1) {
        newState[category][level].push(topic);
      } else {
        newState[category][level].splice(topicIndex, 1);
      }
      return newState;
    });
  };

  return (
    <div className="container">
      {webDevTopics.map((categoryData, index) => (
        <div key={index} className="category-card">
          <h2 className="category-title">{categoryData.category}</h2>

          {["easy", "medium", "hard"].map((level) => (
            <div key={level} className="level">
              <h3 className="level-title">{level}</h3>
              <div className="topics">
                {categoryData.topics[level].map((topic) => (
                  <div key={topic} className="topic">
                    <input
                      type="checkbox"
                      id={`${categoryData.category}-${level}-${topic}`}
                      onChange={() =>
                        handleCheckboxChange(
                          categoryData.category,
                          level,
                          topic
                        )
                      }
                    />
                    <label
                      htmlFor={`${categoryData.category}-${level}-${topic}`}
                      className="topic-label"
                    >
                      {topic}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}

      <div className="save-button-container">
        <button
          onClick={() => alert("Your selections have been saved!")}
          className="save-button"
        >
          Save Selections
        </button>
      </div>
    </div>
  );
};

export default TopicSelector;
