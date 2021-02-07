import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function AccordionContent({ appType, title, defaultOpen }) {
  const [openTab, setOpenTab] = useState(defaultOpen);

  return (
    <div className="accordion-tab">
      <div className="accordion-title" onClick={() => setOpenTab(!openTab)}>
        <span>{title} Applications</span>
        <span className="accordion-icon">{openTab ? "-" : "+"}</span>
      </div>
      {openTab ? (
        <Router>
          <div className="table">
            <div className="tr">
              <div className="cell th">Application name</div>
              <div className="cell th">Author</div>
              <div className="cell th">Version</div>
            </div>
            {appType.map((app) => (
              <div key={app.id} className="tr">
                {/* replace all spaces with "-" in the url */}
                <Link to={`/#${app.app.split(" ").join("-")}`}>
                  <div className="cell td">{app.app ? app.app : "---"}</div>
                  <div className="cell td">
                    {/* discard items with author: null or name: null */}
                    {app.author && app.author.name ? app.author.name : "---"}
                  </div>
                  <div className="cell td">
                    {app.version ? app.version : "---"}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </Router>
      ) : null}
    </div>
  );
}
