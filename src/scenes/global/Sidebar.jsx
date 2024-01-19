import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useState } from "react";

const Item = ({ title, to, selected, setSelected, icon }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      onClick={() => setSelected(title)}
      icon={icon}
      style={{
        color: colors.grey[100],
      }}
    >
      <Typography>{title}</Typography>
      <Link to={to}></Link>
    </MenuItem>
  );
};

function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  //ob, Sidebar is collapsed
  const [isCollapsed, setIsCollapsed] = useState(false);
  //welche Icon ist ausgewählt
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>
          {/* USER */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" alignItems="center" justifyContent="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src="../../assets/user.png"
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>

              <Box textAlign="center">
                <Typography
                  variant="h2"
                  fontWeight="bold"
                  color={colors.grey[100]}
                  sx={{ m: "10px 0 0 0" }}
                >
                  ED Roh
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          {/* MENU ITEMS */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              selected={selected}
              setSelected={setSelected}
              icon={<HomeOutlinedIcon />}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              selected={selected}
              setSelected={setSelected}
              icon={<PeopleOutlinedIcon />}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              selected={selected}
              setSelected={setSelected}
              icon={<ContactsOutlinedIcon />}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              selected={selected}
              setSelected={setSelected}
              icon={<ReceiptOutlinedIcon />}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              selected={selected}
              setSelected={setSelected}
              icon={<PersonOutlinedIcon />}
            />
            <Item
              title="Calendar"
              to="/calendar"
              selected={selected}
              setSelected={setSelected}
              icon={<CalendarTodayOutlinedIcon />}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              selected={selected}
              setSelected={setSelected}
              icon={<HelpOutlineOutlinedIcon />}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              selected={selected}
              setSelected={setSelected}
              icon={<BarChartOutlinedIcon />}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              selected={selected}
              setSelected={setSelected}
              icon={<PieChartOutlineOutlinedIcon />}
            />
            <Item
              title="Line Chart"
              to="/line"
              selected={selected}
              setSelected={setSelected}
              icon={<TimelineOutlinedIcon />}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              selected={selected}
              setSelected={setSelected}
              icon={<MapOutlinedIcon />}
            />
          </Box>
        </Menu>
      </ProSidebar>
      ;
    </Box>
  );
}

export default Sidebar;
