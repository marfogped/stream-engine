import { useEffect, useState } from "react";
import Hero from "./hero";
import Jobs from "./jobs";
import ApplyForm from "./apply-form";
import { Career } from "../../lib/types";

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState<Career | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Jobs setSelectedJob={setSelectedJob} />
      <ApplyForm selectedJob={selectedJob} />
    </>
  );
};

export default Careers;
