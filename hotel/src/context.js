import React, { Component } from "react";
import items from "./data";const RoomContext = React.createContext();

export default class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  getAllRooms = async () => {
    var headers = new Headers();
    headers.append("cache-control", "no-cache");
    headers.append("x-apikey", "62348bc0dced170e8c83a37c");

    fetch("https://pommedeterre-20df.restdb.io/rest/chambre", {
        method: 'GET',
        headers: headers,
        mode: 'cors',
        cache: 'default'
      })
      .then(res => res.json())
      .then(
        (result) => {
          let rooms = this.formatRestDBData(result);
          let featuredRooms = rooms.filter(room => room.featured === true);
          let maxPrice = Math.max(...rooms.map(item => item.price));
          let maxSize = Math.max(...rooms.map(item => item.size));
          this.setState({
            rooms,
            featuredRooms,
            sortedRooms: rooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            maxSize
          });
        },
        (error) => {
          console.log(error)
        }
    )
  }

  createNewRoom = async () => {
    var headers = new Headers();
    headers.append("cache-control", "no-cache");
    headers.append("content-type", "application/json")
    headers.append("x-apikey", "62348bc0dced170e8c83a37c");

    var newChambre = {
      "description": "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      "name": "single basic",
      "slug": "single_basic",
      "type": "single",
      "price": 100,
      "size": 200,
      "capacity": 1,
      "pets": false,
      "breakfast": false,
      "featured": false,
      "extras": [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds"
      ],
      "images": [
        {
          "fields": {
            "file": {
              "url": "https://picsum.photos/300/200"
            }
          }
        },
        {
          "fields": {
            "file": {
              "url": "https://picsum.photos/300/200"
            }
          }
        },
        {
          "fields": {
            "file": {
              "url": "https://picsum.photos/300/200"
            }
          }
        },
        {
          "fields": {
            "file": {
              "url": "https://picsum.photos/300/200"
            }
          }
        }
      ]
    }

    fetch("https://pommedeterre-20df.restdb.io/rest/chambre", {
        method: 'POST',
        headers: headers,
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(newChambre)
      })
      .then(
        (error) => {
          console.log(error)
        }
    )
  }

  componentDidMount() {
    this.getAllRooms();
    // this.createNewRoom();
  }

  formatRestDBData(items) {
    let tempItems = items.map(item => {
      let id = item._id;
      let images = item.images.map(image => image.fields.file.url);

      let room = { ...item, images, id };

      return room;
    });

    return tempItems;
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let room = { ...item.fields, images, id };
      return room;
    });

    return tempItems;
  }

  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    // console.log(name, value);

    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );
  };

  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;

    let tempRooms = [...rooms];
    // transform values
    // get capacity
    capacity = parseInt(capacity);
    price = parseInt(price);
    // filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }
    // filter by price
    tempRooms = tempRooms.filter(room => room.price <= price);
    //filter by size
    tempRooms = tempRooms.filter(
      room => room.size >= minSize && room.size <= maxSize
    );
    //filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }
    //filter by pets
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }
    this.setState({
      sortedRooms: tempRooms
    });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}
