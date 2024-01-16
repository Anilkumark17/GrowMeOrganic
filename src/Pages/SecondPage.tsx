
import Table from "../Components/Table";
import DepartmentList from "../Components/DepartmentList";

const SecondPage = () => {
  const departmentData = [
    {
      department: "Agriculture & Fishing",
      sub_departments: ["Agriculture", "crops",'Farming animal &LiveStock','Fishery & aquaculture','Ranching'],
    },
    {
      department: "Business Services",
      sub_departments: ['Accounting &Accounting Services','Auctions','Business Services','Career Planning','Commertial Printing','Career'],
    },
  ];

  return (
    <div>
      <Table />
      <DepartmentList data={departmentData} />
    </div>
  );
};

export default SecondPage;
