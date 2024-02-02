import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { baseUrl } from '../utils/constant';
import '../styles/TransHistory.css'

export const TransHistory = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get(`${baseUrl}`)
          .then(res => {
            console.log('API Response:', res.data);
            setTransactions(res.data);
          })
          .catch(err => {
            console.error('Error fetching data:', err);
    
            // Log specific details of the error
            if (err.response) {
              // The request was made and the server responded with a status code
              console.error('Server responded with:', err.response.status, err.response.data);
            } else if (err.request) {
              // The request was made but no response was received
              console.error('No response received. Request details:', err.request);
            } else {
              console.error('Error details:', err.message);
            }
          });
      }, []);

  return (
    <div class="container">
        <div class="table-wrapper">
            <div class="table-title">
                <div class="row">
                    <div class="col-sm-8"><h2>All Transaction History</h2></div>
                    <div class="col-sm-4">
                        <button type="button" class="btn btn-info add-new"><i class="fa fa-plus"></i> Add New</button>
                    </div>
                </div>
            </div>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {transactions.map((transaction, index) => (
                    <tr key={transaction.id}>
                    <td>{index + 1}</td> {/* Automatically incrementing the ID */}
                    <td>{new Date(transaction.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.type}</td>
                    <td>
                        <a className="add" title="Add" data-toggle="tooltip">
                        <i className="material-icons">&#xE03B;</i>
                        </a>
                        <a className="edit" title="Edit" data-toggle="tooltip">
                        <i className="material-icons">&#xE254;</i>
                        </a>
                        <a className="delete" title="Delete" data-toggle="tooltip">
                        <i className="material-icons">&#xE872;</i>
                        </a>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>     
  )
}
