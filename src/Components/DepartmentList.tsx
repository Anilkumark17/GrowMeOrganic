import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

interface DepartmentData {
  department: string;
  sub_departments: string[];
}

// Include DepartmentProps directly in the same file
interface DepartmentProps {
  data: DepartmentData[];
}

const DepartmentList: React.FC<DepartmentProps> = ({ data }) => {
  const [expanded, setExpanded] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  const handleToggleExpand = (department: string) => {
    setExpanded((prev) =>
      prev.includes(department)
        ? prev.filter((dep) => dep !== department)
        : [...prev, department]
    );
  };

  const handleSelect = (department: string) => {
    const isDepartmentSelected = selected.includes(department);
    let updatedSelected: string[] = [];

    if (isDepartmentSelected) {
      updatedSelected = selected.filter((subDep) => ![department, ...(data.find((dep) => dep.department === department)?.sub_departments ?? [])].includes(subDep));
    } else {
      updatedSelected = [...selected, department, ...(data.find((dep) => dep.department === department)?.sub_departments ?? [])];
    }

    setSelected(updatedSelected);
  };

  const handleSubSelect = (subDepartment: string, department: string) => {
    let updatedSelected: string[] = selected.includes(subDepartment)
      ? selected.filter((subDep) => subDep !== subDepartment)
      : [...selected, subDepartment];

    const allSubsSelected = data
      .find((dep) => dep.department === department)
      ?.sub_departments.every((subDep) => updatedSelected.includes(subDep));

    if (allSubsSelected) {
      updatedSelected = updatedSelected.includes(department) ? updatedSelected : [...updatedSelected, department];
    } else {
      updatedSelected = updatedSelected.filter((subDep) => subDep !== department);
    }

    setSelected(updatedSelected);
  };

  return (
    <List>
      {data.map(({ department, sub_departments }: DepartmentData) => (
        <React.Fragment key={department}>
          <ListItem button onClick={() => handleToggleExpand(department)}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selected.includes(department)}
                  onChange={() => handleSelect(department)}
                />
              }
              label={department}
            />
            {expanded.includes(department) ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )}
          </ListItem>
          {expanded.includes(department) && (
            <List component="div" disablePadding>
              {sub_departments.map((subDepartment) => (
                <ListItem key={subDepartment} >
                  <FormControlLabel
                    control={
                      <Checkbox
                        edge="start"
                        checked={selected.includes(subDepartment)}
                        onChange={() =>
                          handleSubSelect(subDepartment, department)
                        }
                      />
                    }
                    label={subDepartment}
                    style={{ marginLeft: "32px" }}
                  />
                </ListItem>
              ))}
            </List>
          )}
        </React.Fragment>
      ))}
    </List>
  );
};

export default DepartmentList;
