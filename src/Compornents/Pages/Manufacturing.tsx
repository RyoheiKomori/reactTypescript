import { useState } from "react";

export const Manufacturing = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <h1>Manufacturing</h1>
      <div>
        <div className="tabs">
          <div
            className={`tab ${activeTab === "tab1" ? "active" : ""}`}
            onClick={() => changeTab("tab1")}
          >
            Tab 1
          </div>
          <div
            className={`tab ${activeTab === "tab2" ? "active" : ""}`}
            onClick={() => changeTab("tab2")}
          >
            Tab 2
          </div>
          <div
            className={`tab ${activeTab === "tab3" ? "active" : ""}`}
            onClick={() => changeTab("tab3")}
          >
            Tab 3
          </div>
        </div>
        <div className="tab-content">
          {activeTab === "tab1" && <p>Tab 1 content</p>}
          {activeTab === "tab2" && <p>Tab 2 content</p>}
          {activeTab === "tab3" && <p>Tab 3 content</p>}
        </div>
      </div>
    </div>
  );
};
