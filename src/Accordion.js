import React from "react";
import AccordionContent from "./AccordionContent";

export default function Accordion({ appList }) {
  //extract all elements with version >= 1
  const matureApp = appList.filter((app) =>
    app.version ? app.version[0] !== "0" : false
  );

  //extract all elements with version < 1
  const betaApp = appList.filter((app) =>
    app.version ? app.version[0] === "0" : false
  );

  return (
    <div className="accordion">
      <AccordionContent appType={matureApp} title="Mature" defaultOpen />
      <AccordionContent appType={betaApp} title="Beta" />
    </div>
  );
}
