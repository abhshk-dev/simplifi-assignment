import { Card, Row, Col, Avatar, Typography } from "antd";

const { Title, Text, Link } = Typography;

const UserCard = ({ user }) => {
  return (
    <Card
      style={{
        width: "65%",
        marginBottom: 16,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <Row gutter={[16, 16]} align="middle">
        <Col md={4} style={{ textAlign: "center" }}>
          <Avatar
            size={120}
            src={
              user.image ||
              `https://api.dicebear.com/8.x/avataaars/svg?seed=${encodeURIComponent(
                user.username
              )}`
            }
            alt={user.name}
          />
        </Col>

        <Col md={20}>
          <Title level={2} style={{ marginBottom: 12 }}>
            {user.name}
          </Title>
          <Text strong>Email: </Text>
          <Text>{user.email}</Text>
          <br />
          <Text strong>Phone: </Text>
          <Text>{user.phone}</Text>
          <br />
          <Text strong>Company: </Text>
          <Text>{user.company.name}</Text>
          <br />
          <Text strong>Website: </Text>
          <Link href={`https://${user.website}`} target="_blank">
            {user.website}
          </Link>
          <br />
          <Text strong>Address: </Text>
          <Text>
            {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
          </Text>
        </Col>
      </Row>
    </Card>
  );
};

export default UserCard;
