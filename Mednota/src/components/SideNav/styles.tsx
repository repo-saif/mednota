import styled from 'styled-components';
export const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    display: 'flex',
    justifyContent: 'space-between'
  };
  export const logo:React.CSSProperties = {
    height: '64px'
  }


  export const MenuWrapper = styled.div`
     margin: 0 3rem;
    & .ant-menu-inline.ant-menu-root {
      border: none;
    }
    & .ant-menu-inline.ant-menu-root .ant-menu-item {
     justify-content: flex-start;
    }

    & .ant-menu-inline.ant-menu-root .ant-menu-item >.ant-menu-title-content,
    & .ant-menu-inline.ant-menu-root .ant-menu-submenu-title >.ant-menu-title-content{
      text-align: left;
    }
  `
  
  export const sideHeader = styled.div`
  margin: 0 3rem;
   & p{
   font-size: 1.5rem;
   line-height: 1rem;
   }
  `