import React from "react";

const OptionsData = () => {
  return (
    <div>
      <input type="checkbox" id="body-settings" />
      <span className="body-settings-tab">
        <ul className="tab-list">
          <li>Contact info</li>
          <li>Clear messages</li>
          <li>Delete chat</li>
        </ul>
      </span>
    </div>
  );
};

export default OptionsData;
