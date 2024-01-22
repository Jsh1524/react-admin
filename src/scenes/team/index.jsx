import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";
import { tokens } from "../../theme";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SecurityIcon from "@mui/icons-material/Security";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Header from "../../components/Header";

function Team() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const column = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access",
      flex: 1,
      renderCell: ({row : {access}}) => {
        return (
          <Box
          width="60%"
          padding='5px'
          margin="0 auto"
          borderRadius='3px'
          display='flex'

          backgroundColor = {
            access === 'admin' 
            ? colors.greenAccent[600]
            : colors.greenAccent[700]
          }
          >
            {access === 'admin' && <AdminPanelSettingsIcon />}
            {access === 'manager' && <LockOpenIcon />}
            {access === 'user' && <SecurityIcon />}
            <Typography color={colors.grey[100]} sx={{ml:'5px'}}>
              {access}
            </Typography>
          </Box>
        )
      }
    },

  ];

  return (
    <Box m="20px">
      <Box>
        <Header title="Manage Team" subtitle="Manage your team" />
      </Box>
      <Box>
        <DataGrid rows={mockDataTeam} columns={column} />
      </Box>
    </Box>
  );
}

export default Team;
