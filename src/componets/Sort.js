import { Form } from "react-bootstrap";
function Sort(props) {

    const onChangeHandler = (event) => {
        props.onChangeSort(event.target.value);
    }
  return (
    <div className="">
      <Form.Control as="select" custom onChange={(event) => onChangeHandler(event)}>
        <option>Open this select menu</option>
        <option value="0">Name</option>
        <option value="1">Price - Low to High</option>
        <option value="2">Price - High to Low</option>
      </Form.Control>
    </div>
  );
}

export default Sort;
