import FavoriteIcon from '@mui/icons-material/Favorite';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Box } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import Contact from './screens/Contact';
import Dial from './screens/Dial';

export default function App() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Paper sx={{ pb: 10, 
      width: 300, 
      height: 300,
      margin: 'auto', 
      background: 'white' 
     }}>
<Box sx={{p:2}}>
      {activeTab==0 && <Dial/>}
      {activeTab==1 && <Contact/>}
</Box>

      <Paper sx={{  }} elevation={3}>
        <BottomNavigation
          showLabels
          value={activeTab}
          onChange={(event, newValue) => {
            setActiveTab(newValue);
          }}
        >
          <BottomNavigationAction label="Dial" icon={<LocalPhoneIcon />} />
          <BottomNavigationAction label="Contact" icon={<FavoriteIcon />} />
        </BottomNavigation>
      </Paper>
    </Paper>
  );
}