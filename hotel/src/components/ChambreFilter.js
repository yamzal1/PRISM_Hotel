import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Titre";

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};
export default function ChambreFilter({rooms}) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;
  // get unique types
  let types = getUnique(rooms, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => (
    <option className="option" key={index} value={item}>
      {item}
    </option>
  ));
  // get unique capacity
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => (
    <option className="option" key={index} value={item}>
      {item}
    </option>
  ));
  return (
    <section className="filter-container">
      <Title title="Rechercher une chambre" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">Type de chambres</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className="form-control"
            value={type}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* guests  */}
        <div className="form-group">
          <label htmlFor="capacity">Personnes</label>
          <select
            name="capacity"
            id="capacity"
            onChange={handleChange}
            className="form-control"
            value={capacity}
          >
            {people}
          </select>
        </div>
        {/* end of guests */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">Prix max {price}€</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* end of room price*/}
        {/* size */}
        <div className="form-group">
          <label htmlFor="price">Taille de la chambre </label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of select type */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
          <label htmlFor="breakfast">Petit déjeuner</label>
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />            
          </div>
          <div className="single-extra">
            <label htmlFor="pets">Animaux</label>
            <input
              type="checkbox"
              name="pets"
              checked={pets}
              onChange={handleChange}
            />  
          </div>
        </div>
        {/* end of extras type */}
      </form>
    </section>);
}
