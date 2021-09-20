


function Filter(props) {

    const onValueChange = (event) => {
        console.log('formSubmit filterValue : ' + event.target.value);
        props.setFilterValue(event.target.value);
        props.productFilter(event.target.value);
    }

    return (
        <div className='radios'>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="business"
              checked={props.filterValue === "business"}
              onChange={onValueChange}
            />
            Business
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="cookbooks"
              checked={props.filterValue === "cookbooks"}
              onChange={onValueChange}
            />
            Cookbooks
          </label>
        </div>
      </div>
        
    //   <div className="">
    //     <input type="radio" value="Business" name="filter" /> Business
    //     <input type="radio" value="Cookbooks" name="filter" /> Cookbooks
    //     <input type="radio" value="Mystery" name="filter" /> Mystery
    //     <input type="radio" value="Scifi" name="filter" /> Scifi
    //     <input type="radio" value="Accessories" name="filter" /> Accessories
    //   </div>
    );
  }
  
  export default Filter;
  