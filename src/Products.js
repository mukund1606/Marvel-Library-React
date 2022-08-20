import React from 'react'
import { useState } from 'react';

function Products() {
    let [products, setProducts] = useState([
        { Name: "ABC", Age: 29 },
        { Name: "DEF", Age: 27 },
        { Name: "GHI", Age: 31 },
        { Name: "JKL", Age: 34 },
        { Name: "MNO", Age: 30 },
    ])
    let vals = Object.keys(products[0]);

    return (
        <div>
            <h1>Products</h1>
            <table>
                <thead>
                    <tr>
                        {vals.map(function (keys, index) {
                            return (<th>{keys}</th>)
                        }

                        )}
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(function (product, index) {
                            return (
                                < tr >
                                    <td>{product.Name}</td>
                                    <td>{product.Age}</td>
                                </tr>)
                        })
                    }
                </tbody>
            </table>
        </div >
    )
}

export default Products;