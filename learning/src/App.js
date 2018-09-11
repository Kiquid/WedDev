import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Col,Button} from 'react-bootstrap';
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className='row'>
          <Col md={2} mdOffset={1}>
            <div class="small-card card-body">
              <center>
                <p>Users</p>
                <hr/>
                <p>17</p>
              </center>
            </div>          
          </Col>
          <Col md={2}>
            <div class="small-card card-body">
            <center>
             <p>Admin</p>
             <hr/>
             <p>6</p>
             </center>
            </div>          
          </Col>
          <Col md={2}>
            <div class="small-card card-body">
            <center>
             <p>Manager</p>
             <hr/>
             <p>7</p>
             </center>
            </div>          
          </Col>
          <Col md={2}>
            <div class="small-card card-body">
            <center>
             <p>Tester</p>
             <hr/>
             <p>14</p>
             </center>
            </div>          
          </Col>
          <Col md={2}>
            <div class="small-card card-body">
            <center>
             <p>Projects</p>
             <hr/>
             <p>46</p>
             </center>
            </div>                   
          </Col>
          <Col md={2}>
            <div class="small-card card-body">
            <center>
             <p>Test Cases</p>
             <hr/>
             <p>26</p>
             </center>
            </div>          
          </Col>
          <Col md={2}>
            <div class="small-card card-body">
            <center>
             <p>Profile</p>
             <hr/>
             <p>25</p>
             </center>
            </div>          
          </Col>
          <Col md={2}>
            <div class="small-card card-body">
            <center>
             <p>Reports</p>
             <hr/>
             <p>120</p>
             </center>
            </div>          
          </Col>
          <Col md={2}>
            <div class="small-card card-body">
            <center>
             <p>Project</p>
             <hr/>
             <p>+</p>
             </center>
            </div>          
          </Col>
        </div>
          <div className="row">
            <Col md={4} mdOffset={1} >
              <div className="card example-1 scrollbar-ripe-malinka">
              <div className="card-body">
              <h4 id="section1"><strong>Projects</strong></h4>
              <hr/>
              <div className="row">
                <Col md={4}>
                  <p>Project 1</p>                                  
                </Col>
                <Col md={3}>
                <Button bsStyle="danger">Del</Button>                                 
                </Col>
                <Col md={3}>
                <Button bsStyle="info">Edit</Button>                                 
                </Col>                 
              </div>
              <hr/>
              <div className="row">
                <Col md={4}>
                  <p>Project 1</p>                                  
                </Col>
                <Col md={3}>
                <Button bsStyle="danger">Del</Button>                                 
                </Col>
                <Col md={3}>
                <Button bsStyle="info">Edit</Button>                                 
                </Col>                 
              </div>
              <hr/>
              <p>Project 3</p>
              <hr/>
              <p>Project 4</p>
              <hr/>
              <p>Project 5</p>
              <hr/>
              <p>Project 6</p>
              <hr/>
              <p>Project 7</p>            
              
              </div>
              </div>
            </Col>

            <Col md={7}>
            <div className="card example-1 scrollbar-ripe-malinka">
              <div className="card-body">
              <h4><strong>Project Details</strong></h4>
              <hr/>
              <h5><strong># &nbsp;Test Cases&nbsp; Start Date &nbsp; End Date &nbsp; Status &nbsp;Assign</strong></h5> 
              <hr/>
              <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
              <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
              <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
              <p>Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle rights whatever. Anim keffiyeh carles cardigan. Velit seitan mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean shorts, williamsburg hoodie minim qui you probably haven't heard of them et cardigan trust fund culpa biodiesel wes anderson aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh artisan ullamco consequat.</p>
              </div>
              </div>
            </Col>
          </div>
      </div>
    );
  }
}

export default App;
