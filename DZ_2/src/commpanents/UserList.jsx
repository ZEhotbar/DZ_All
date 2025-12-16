import { Row, Col } from 'antd';
import UserCard from './UserCard';

const UserList = () => {
  const users = [
    { name: 'Иван Иванов', age: 25, city: 'Москва', active: true, img: 'https://xsgames.co/randomusers/assets/avatars/male/46.jpg' },
    { name: 'Мария Курутова', age: 30, city: 'Санкт-Петербург', active: false, img: 'https://img.freepik.com/free-photo/young-man-worried-expression_1194-1619.jpg?semt=ais_hybrid&w=740&q=80' },
    { name: 'Алексей Некурутов', age: 28, city: 'Екатеринбург', active: true, img: 'https://xsgames.co/randomusers/assets/avatars/male/30.jpg' },
  ];

  return (
    <Row gutter={16}>
      {users.map((user, index) => (
          <Col span={8} key={index}>
            <UserCard user={user} />
          </Col>
      ))}
    </Row>
  );
};

export default UserList;
