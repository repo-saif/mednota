import {theme } from 'antd';
export const themeConfig = {
    algorithm: theme.lightAlgorithm,
    token: {
        // Seed Token
        // colorPrimary: '#003169',
        borderRadius: 2,
        colorBgBase: "#eef1f9",
        // Alias Token
        colorBgContainer: '#ffffff'
      }, 
    components: {
        Layout: {
          headerBg: "#ffffff",
          siderBg: "#ffffff"
        },
        Menu: {
          darkItemBg: '#1565C0',
          darkDangerItemActiveBg: '#ffffff',
          itemSelectedColor: '#ffffff',
          dangerItemSelectedBg: '#ff0000',
          darkDangerItemActiveBg: '#1565C0',
          darkDangerItemColor	: '#1565C0',
          darkDangerItemSelectedBg	: '#ff0000',
          darkDangerItemHoverColor	: '#1565C0',
          colorPrimary: '#1677ff',
          itemSelectedBg: '#846cf9',
          algorithm: false
        },
        Select: {
          selectorBg: '#ffffff'
        }
      }
      
}