import React from "react";
import JobLists from "../components/JobLists";
import SingleJob from "../components/SingleJob";
import AllJobs from "../components/AllJobs";

const Jobs = () => {
  return (
    <div class="lg:pl-[14rem]  mt-[5.8125rem]">
      <main class="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <AllJobs />
        <JobLists>
          <SingleJob />
        </JobLists>
      </main>
    </div>
  );
};

export default Jobs;
