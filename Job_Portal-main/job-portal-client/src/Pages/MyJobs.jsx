// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const MyJobs = () => {
//   const [jobs, setJobs] = useState([]);
//   const [searchText, setSearchText] = useState("");
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     setIsLoading(true);
//     fetch(`http://localhost:3000/myJobs/a@gmail.com`)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setJobs(data);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error("There was a problem with the fetch operation:", error);
//         setIsLoading(false);
//       });
//   }, [searchText]);

//   const handleSearch = () => {
//     const filter = jobs.filter(
//       (job) =>
//         job.jobTitle.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
//     );
//     console.log(filter);
//     setJobs(filter);
//   };

//   const handleDelete = (id) => {
//     console.log(id);
//     fetch(`http://localhost:3000/job/${id}`, {
//       method: "DELETE",
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return res.json();
//       })
//       .then((data) => {
//         if (data.acknowledged) {
//           alert("Job Deleted Successfully!!");
//           setIsLoading(true);
//         }
//       })
//       .catch((error) => {
//         console.error("There was a problem with the delete operation:", error);
//       });
//   };

//   return (
//     <div className="max-w-screen-2xl container mx-auto xl:px-24 px-24">
//       <div className="my-jobs-container">
//         <h1 className="text-center p-4">All My Jobs</h1>
//         <div className="search-box p-2 text-center mb-2 ">
//           <input
//             onChange={(e) => setSearchText(e.target.value)}
//             type="text"
//             name="search"
//             id="search"
//             className="py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full"
//           />
//           <button
//             className="bg-blue text-white font-semibold px-8 py-2 rounded-sm mb-4"
//             onClick={handleSearch}
//           >
//             Search
//           </button>
//         </div>
//       </div>
//       <section className="py-1 bg-blueGray-50">
//         <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-5">
//           <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
//             <div className="rounded-t mb-0 px-4 py-3 border-0">
//               <div className="flex flex-wrap items-center">
//                 <div className="relative w-full px-4 max-w-full flex-grow flex-1">
//                   <h3 className="font-semibold text-base text-blueGray-700">
//                     All Jobs
//                   </h3>
//                 </div>
//                 <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
//                   <Link to="/post-job">
//                     <button
//                       className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
//                       type="button"
//                     >
//                       Post A New Job
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             <div className="block w-full overflow-x-auto">
//               <table className="items-center bg-transparent w-full border-collapse ">
//                 <thead>
//                   <tr>
//                     <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                       No.
//                     </th>
//                     <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                       TITLE
//                     </th>
//                     <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                       COMPANY NAME
//                     </th>
//                     <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                       SALARY
//                     </th>
//                     <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                       EDIT
//                     </th>
//                     <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
//                       DELETE
//                     </th>
//                   </tr>
//                 </thead>
//                 {isLoading ? (
//                   <tbody>
//                     <tr>
//                       <td colSpan="6" className="text-center p-4">
//                         Loading...
//                       </td>
//                     </tr>
//                   </tbody>
//                 ) : (
//                   <tbody>
//                     {jobs.map((job, index) => (
//                       <tr key={index}>
//                         <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
//                           {index + 1}
//                         </th>
//                         <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
//                           {job.jobTitle}
//                         </td>
//                         <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                           {job.companyName}
//                         </td>
//                         <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                           <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
//                           ${job.minPrice} - ${job.maxPrice}
//                         </td>
//                         <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                           <button>
//                             <Link to={`/edit-job/${job?._id}`}>Edit</Link>
//                           </button>
//                         </td>
//                         <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
//                           <button
//                             onClick={() => handleDelete(job._id)}
//                             className="bg-red-700 py-2 px-6 text-white rounded-sm"
//                           >
//                             Delete
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 )}
//               </table>
//             </div>
//           </div>
//         </div>
//         <footer className="relative pt-8 pb-6 mt-16">
//           <div className="container mx-auto px-4">
//             <div className="flex flex-wrap items-center md:justify-between justify-center">
//               <div className="w-full md:w-6/12 px-4 mx-auto text-center">
//                 <div className="text-sm text-blueGray-500 font-semibold py-1">
//                   Made with{" "}
//                   <a
//                     href="https://www.creative-tim.com/product/notus-js"
//                     className="text-blueGray-500 hover:text-gray-800"
//                     target="_blank"
//                   >
//                     Notus JS
//                   </a>{" "}
//                   by{" "}
//                   <a
//                     href="https://www.creative-tim.com"
//                     className="text-blueGray-500 hover:text-blueGray-800"
//                     target="_blank"
//                   >
//                     {" "}
//                     Creative Tim
//                   </a>
//                   .
//                 </div>
//               </div>
//             </div>
//           </div>
//         </footer>
//       </section>
//     </div>
//   );
// };

// export default MyJobs;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  // setting pagenation
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:3000/myJobs/a@gmail.com`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        // after we are fetching jobs collection from backend api we are setting jobs==data
        setJobs(data);
        // then the loading is set to false as the the data from backend is fetched
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setIsLoading(false);
      });
  }, [searchText]);

  //paginaton
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentJobs = jobs.slice(indexOfFirstItem, indexOfLastItem);

  // next button and previous button
  const nextPage = () => {
    if (indexOfLastItem < jobs.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearch = () => {
    // we are filtering the jobs based on the search text
    const filter = jobs.filter(
      (job) =>
        job.jobTitle.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
    // we get all the filtered jobs stored in variable filter then we are setting jobs==filter
    setJobs(filter);
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/job/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        if (data.acknowledged) {
          alert("Job Deleted Successfully!!");
          setIsLoading(true);
          // Re-fetch jobs after deletion to update the list
          fetch(`http://localhost:3000/myJobs/a@gmail.com`)
            .then((res) => res.json())
            .then((data) => setJobs(data))
            .catch((error) => console.error("Error fetching jobs:", error));
        }
      })
      .catch((error) => {
        console.error("There was a problem with the delete operation:", error);
      });
  };
  // we are getting this search text from the line 274 onchange event
  //console.log(searchText);
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-24">
      <div className="my-jobs-container">
        <h1 className="text-center p-4">All My Jobs</h1>
        <div className="search-box p-2 text-center mb-2">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            name="search"
            id="search"
            className="py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full"
          />
          <button
            className="bg-blue text-white font-semibold px-8 py-2 rounded-sm mb-4"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      {/* Code for the Table  */}
      <section className="py-1 bg-blueGray-50">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mx-auto mt-5">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-blueGray-700">
                    All Jobs
                  </h3>
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <Link to="/post-job">
                    <button
                      className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      Post A New Job
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="block w-full overflow-x-auto">
              <table className="items-center bg-transparent w-full border-collapse">
                <thead>
                  <tr>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      No.
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      TITLE
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      COMPANY NAME
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      SALARY
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      EDIT
                    </th>
                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      DELETE
                    </th>
                  </tr>
                </thead>
                {isLoading ? (
                  <tbody>
                    <tr>
                      <td colSpan="6" className="text-center p-4">
                        Loading...
                      </td>
                    </tr>
                  </tbody>
                ) : (
                  <tbody>
                    {/* We are getting all the jobs in table format from mapping of jobs variable which will accordingly change based upon search Text  */}
                    {/* For the pagenation as we are setting the jobs limit to 4 we are updating the jobs to  currentJobs*/}
                    {currentJobs.map((job, index) => (
                      <tr key={index}>
                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                          {index + 1}
                        </th>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {job.jobTitle}
                        </td>
                        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {job.companyName}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                          ${job.minPrice} - ${job.maxPrice}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <button>
                            <Link to={`/edit-job/${job?._id}`}>Edit</Link>
                          </button>
                          {/* <Link to={`/edit-job/${job.id}`}>
                            <button>Edit</button>
                          </Link> */}
                        </td>
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <button
                            //we are deleting the job based upon the id
                            // if we click delete button on specific job then we will get that id pass it to handleDelete function which will delete that job from backend through delete request
                            onClick={() => handleDelete(job._id)}
                            className="bg-red-700 py-2 px-6 text-white rounded-sm"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
        {/* Pagenation */}
        <div className="flex justify-center text-black space-x-8">
          {currentPage > 1 && (
            <button className="hover:underline" onClick={prevPage}>
              Previous
            </button>
          )}
          {indexOfLastItem < jobs.length && (
            <button className="hover:underline" onClick={nextPage}>
              Next
            </button>
          )}
        </div>
        <footer className="relative pt-8 pb-6 mt-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                <div className="text-sm text-blueGray-500 font-semibold py-1">
                  Made{" "}
                  <a
                    href="https://www.creative-tim.com/product/notus-js"
                    className="text-blueGray-500 hover:text-gray-800"
                    target="_blank"
                  >
                    {/* { Notus JS} */}
                  </a>{" "}
                  by{" "}
                  <a
                    //href="https://www.creative-tim.com"
                    className="text-blueGray-500 hover:text-blueGray-800"
                    target="_blank"
                  >
                    {" "}
                    Pranay
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default MyJobs;
