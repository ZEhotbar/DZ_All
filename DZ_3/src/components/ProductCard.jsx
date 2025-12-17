import { Card, Button } from 'antd';

const images = [
    "https://thumbs.dreamstime.com/b/random-house-west-palm-beach-beachfront-property-most-houses-spanish-style-homes-west-palm-beach-florida-mansion-159290107.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d48d23e5-4cf5-437f-b2d9-5746541638bb/den19fm-17ac0dd3-f8c8-4d05-8af7-e310fcf9f067.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q0OGQyM2U1LTRjZjUtNDM3Zi1iMmQ5LTU3NDY1NDE2MzhiYlwvZGVuMTlmbS0xN2FjMGRkMy1mOGM4LTRkMDUtOGFmNy1lMzEwZmNmOWYwNjcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.vIwhcHfVB9fRAMwUbM982qNlALwVhzqRyGKHFaT1DiE",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Penguin_Random_House_Tower_New_York_2005.jpg/250px-Penguin_Random_House_Tower_New_York_2005.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Random-house2.jpg/250px-Random-house2.jpg",
];


const ProductCard = ({ product }) => {
    const randomImage = images[Math.floor(Math.random() * images.length)];

    const handleClick = () => {
        console.log(`ID товара: ${product.id}, Название: ${product.name}`);
    };

    return (
        <div style={{ marginBottom: '20px' }}>
            <Card
                hoverable
                style={{
                    width: '100%',
                    height: 400, 
                    borderRadius: '10px',  
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  
                    transition: 'transform 0.2s ease-in-out',
                }}
                cover={
                    <img
                        alt={product.name}
                        src={randomImage}
                        style={{
                            width: '100%',
                            height: '200px',  
                            objectFit: 'cover',  
                        }}
                    />
                }
            >
                <Card.Meta
                    title={product.name}
                    description={`Цена: ${product.price} руб.`}
                    style={{
                        textAlign: 'center',  
                        marginBottom: '10px',  
                    }}
                />
                <Button
                    onClick={handleClick}
                    type="primary"
                    style={{
                        width: '100%',
                        backgroundColor: '#4CAF50',  
                        borderColor: '#4CAF50',  
                        fontWeight: 'bold', 
                    }}
                >
                    Buy now
                </Button>
            </Card>
        </div>
    );
};

export default ProductCard;
