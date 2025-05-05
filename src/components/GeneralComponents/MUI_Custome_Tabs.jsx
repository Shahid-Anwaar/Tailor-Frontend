import React, { useEffect, useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import PropTypes from "prop-types";

const TabPanel = ({ children, value, index, noSpacing }) => {
  return (
    <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`}>
      {value === index && (
        <Box
          sx={{
            paddingY: noSpacing ? 1 : 2,
          }}
        >
          {children}
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

const CustomTabsPanel = ({
  tabsData,
  onTabChange,
  Count,
  panelId,
  noSpacing,
}) => {
  const [value, setValue] = useState(0);
  const localStorageKey = panelId ? `activeTab-${panelId}` : null;

  const handleChange = (event, newValue) => {
    if (localStorageKey) {
      localStorage.setItem(localStorageKey, newValue);
    }
    setValue(newValue);
    onTabChange(tabsData[newValue].label);
  };

  useEffect(() => {
    if (localStorageKey) {
      const tabIndex = localStorage.getItem(localStorageKey);
      if (tabIndex !== null) {
        setValue(Number(tabIndex));
      }
    }
  }, [localStorageKey]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="custom tabs">
          {tabsData.map((tab, index) => (
            <Tab
              sx={{
                textTransform: "capitalize",
                letterSpacing: 1,
                wordSpacing: 5,
              }}
              className="text-capitalize"
              key={index}
              label={
                Count && Count[index] !== undefined
                  ? `${tab.label} (${Count[index]})`
                  : tab.label
              }
            />
          ))}
        </Tabs>
      </Box>
      {tabsData.map((tab, index) => (
        <TabPanel key={index} value={value} index={index} noSpacing={noSpacing}>
          {tab.component}
        </TabPanel>
      ))}
    </Box>
  );
};

CustomTabsPanel.propTypes = {
  tabsData: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onTabChange: PropTypes.func.isRequired,
  panelId: PropTypes.string.isRequired,
};

export default CustomTabsPanel;
