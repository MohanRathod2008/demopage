import { Card } from "react-bootstrap";

function List(props) {
  return (
    <div className="list-page">
      {props.products.map((product) => (
        <div className="product">
          <Card style={{ width: "18rem" }}>
            <Card.Img className="product-img" variant="top" src={product.img} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text className="product-text">{product.description}</Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default List;
