import { Layout, Typography } from 'antd';
import UserList from './commpanents/UserList';  

const { Header, Content } = Layout;

const App = () => {
    return (
    <Layout>
        <Header style={{ background: '#001529', padding: 0, width:'100vw', height: '100px'}}>
        <Typography.Title style={{ color: 'white', textAlign: 'center' }}>Карточки пользователей</Typography.Title>
        </Header>
        <Content style={{ padding: '20px', width: '100vw', height: '100vh'}}>
        <UserList />
        </Content>
    </Layout>
    );
};

export default App;
