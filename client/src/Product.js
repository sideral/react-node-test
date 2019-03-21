import React from 'react';

export default function Product({details}){
  return (
    <tr>
      <td>{details.id}</td>
      <td>{details.name}</td>
      <td>{details.description}</td>
      <td>{details.price}</td>
    </tr>
  );
}