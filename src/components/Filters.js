import { useState } from "react";

function Filters() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const sections = [
    "IDEAL FOR",
    "OCCASION",
    "WORK",
    "FABRIC",
    "SEGMENT",
    "SUITABLE FOR",
    "RAW MATERIALS",
    "PATTERN"
  ];

  return (
    <aside className="filters">

      {/* CUSTOMIZABLE */}
      <div className="filter-section">
        <label className="custom-checkbox">
          <input type="checkbox" />
          <img src="/checkbox.png" className="checkbox-icon" />
          <span>CUSTOMIZABLE</span>
        </label>
      </div>

      {/* DYNAMIC SECTIONS */}
      {sections.map((title, index) => (
        <div className="filter-section" key={index}>

  <div
    className="filter-header"
    onClick={() => toggleSection(index)}
  >
    <h5>{title}</h5>
    <img
      src="/arrow-down.png"
      className={`arrow-icon ${
        openSection === index ? "rotate" : ""
      }`}
    />
  </div>

  {/* ALWAYS VISIBLE */}
  <div className="filter-sub">All</div>

  {/* DROPDOWN */}
  <div
    className={`filter-content ${
      openSection === index ? "show" : ""
    }`}
  >
    
  </div>

</div>
        

            ))}

    </aside>
  );
}

export default Filters;