import { Card, Avatar, Tag } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const UserCard = ({ user }) => {
  return (
    <Card
      style={{ width: 300, margin: '10px' }}
      cover={<Avatar src={user.img} size={64} icon={<UserOutlined />} />}
    >
      <Card.Meta
        title={user.name}
        description={`Возраст: ${user.age} | Город: ${user.city}`}
      />
      {user.active ? (
        <Tag color="green">Активен</Tag>
      ) : (
        <Tag color="red">Неактивен</Tag>
      )}
    </Card>
  );
};

export default UserCard;
