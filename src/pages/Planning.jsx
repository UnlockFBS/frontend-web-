import { useEffect, useState } from "react";
import { getInterventions } from "../services/api";
import InterventionList from "../components/InterventionList";

function Planning() {
  const [interventions, setInterventions] = useState([]);

  useEffect(() => {
    getInterventions().then(setInterventions);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Planning des interventions</h2>
      <InterventionList items={interventions} />
    </div>
  );
}

export default Planning;
